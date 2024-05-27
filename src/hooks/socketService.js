import { message } from "antd";
import io from "socket.io-client";

let socket;

const setupSocketListeners = (setTranscription, setSpeakersCount) => {
  socket.on("uploadFileError", (data) => {
    message.error(data.message);
  });

  socket.on("audioTranscripted", (data) => {
    let { text, speakersCount } = data;

    if (speakersCount < 2) {
      text = text.split(": ")[1];
    }

    setTranscription(text);
    setSpeakersCount(speakersCount);
  });

  socket.on("fileUploaded", (data) => {
    message.success(data.message);
    socket.emit("transcript", { language: data.language });
  });
};

export const getSocket = (setTranscription, setSpeakersCount) => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SOCKET_URL);
    setupSocketListeners(setTranscription, setSpeakersCount);
  }
  return socket;
};
