import { message } from "antd";
import io from "socket.io-client";

let socket;

const setupSocketListeners = (setTranscription) => {
  socket.on("uploadFileError", (data) => {
    message.error(data.message);
  });

  socket.on("audioTranscripted", (data) => {
    setTranscription(data.text);
  });

  socket.on("fileUploaded", (data) => {
    message.success(data.message);
    socket.emit("transcript", { language: data.language });
  });
};

export const getSocket = (setTranscription) => {
  if (!socket) {
    socket = io("http://localhost:3010");
    setupSocketListeners(setTranscription);
  }
  return socket;
};
