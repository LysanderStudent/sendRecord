import { message } from "antd";
import io from "socket.io-client";

let socket;

const setupSocketListeners = () => {
  socket.on("uploadFileError", (data) => {
    message.error(data.message);
  });

  socket.on("audioTranscripted", (data) => {
    console.log("Transcripción recibida:", data.text);
  });

  socket.on("fileUploaded", (data) => {
    message.success(data.message);
    socket.emit("transcript", { language: data.language });
  });
};

export const getSocket = () => {
  if (!socket) {
    socket = io("http://localhost:3010");
    setupSocketListeners();
  }
  return socket;
};
