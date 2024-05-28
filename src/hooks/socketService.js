import { message } from "antd";
import io from "socket.io-client";

let socket;

  const setupSocketListeners = (setTranscription, setSpeakersCount, setLoading, setSaveRecord) => {
  socket.on("uploadFileError", (data) => {
    setLoading(false);
    message.error(data.message);
  });

  // Manejar eventos de error
  socket.on('connect_error', (error) => {
    message.error('Error al conectar al servidor de socket');
    console.error(error);
  });

  socket.on("audioTranscripted", (data) => {
    let { text, speakersCount } = data;

    if (speakersCount < 2) {
      text = text.split(": ")[1];
    }

    setTranscription(text);
    setSpeakersCount(speakersCount);
    setLoading(false);
  });

  socket.on("fileUploaded", (data) => {
    message.success(data.message);
    setLoading(true);
    setSaveRecord(false);
    socket.emit("transcript", { language: data.language });
  });
};

export const getSocket = (setTranscription, setSpeakersCount, setLoading, setSaveRecord) => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SOCKET_URL);
    setupSocketListeners(setTranscription, setSpeakersCount, setLoading, setSaveRecord);
  }
  return socket;
};
