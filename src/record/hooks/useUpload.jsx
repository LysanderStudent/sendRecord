import { message } from "antd";
import { getSocket } from "../../hooks/socketService";
import { useState } from "react";

export const useUpload = (
  language,
  setTranscription,
  setSpeakersCount,
  setLoading,
  setSaveRecord
) => {
  const [progress, setProgress] = useState(0);
  const socket = getSocket(setTranscription, setSpeakersCount, setLoading, setSaveRecord);

  const onChange = (info) => {
    const { status } = info.file;

    if (status === "done") {
      message.success(
        `${info.file.name} guardado del lado del cliente satisfactoriamente`
      );
    } else if (status === "error") {
      message.error(`${info.file.name} algo falló al cargar el archivo`);
    }
  };

  const handleAction = ({ file }) => {
    const reader = new FileReader();

    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = parseInt((e.loaded / e.total) * 100);
        setProgress(percent);
      }
    };

    reader.onload = (e) => {
      setProgress(0);
      setSaveRecord(true);
      socket.emit("uploadFileToServer", { file: e.target.result, language });
    };

    reader.onerror = (e) => {
      console.error("Error al leer el archivo:", e);
      onError(new Error("Error al leer el archivo"));
    };

    reader.readAsArrayBuffer(file);
  };

  return {
    progress,
    handleAction,
    onChange,
  };
};
