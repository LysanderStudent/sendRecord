import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { getSocket } from "../../hooks/socketService";

export const useRecord = (messagesStatus) => {
  const socket = getSocket();
  const [message, setMessage] = useState("INICIAR GRABACION");

  const { status, mediaBlobUrl, startRecording, stopRecording } =
    useReactMediaRecorder({
      audio: true,
    });

  useEffect(() => {
    if (messagesStatus) {
      switch (status) {
        case "idle":
          setMessage(messagesStatus.initial);
          break;
        case "recording":
          setMessage(messagesStatus.recording);
          break;
        case "stopped":
          setMessage(messagesStatus.finished);
          break;
      }

      if (status === "stopped") {
        sendAudio();
      }
    }
  }, [status, messagesStatus]);

  const handleActionRecord = () => {
    if (messagesStatus) {
      if (message !== messagesStatus.recording) {
        startRecording();
      } else {
        stopRecording();
      }
    }
  };

  const sendAudio = async () => {
    await fetch(mediaBlobUrl)
      .then((res) => res.blob())
      .then((blob) => socket.emit("uploadFileToServer", blob))
      .catch((err) => console.error({ err }));
  };

  return {
    status,
    mediaBlobUrl,
    message,
    handleActionRecord,
    sendAudio,
  };
};
