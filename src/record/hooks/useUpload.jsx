import { message } from 'antd';
import { useEffect, useState } from 'react';
import { getSocket } from '../../hooks/socketService';

export const useUpload = () => {
  const socket = getSocket();
  const [file, setFile] = useState();

  useEffect(() => {
    if (file) {
      socket.emit('transcript');
      setFile();
    }
  }, [file]);

  const onChange = (info) => {
    const { status } = info.file;

    if (status === 'done') {
      setFile(info.file);
      message.success(`${info.file.name} guardado del lado del cliente satisfactoriamente`);
      info.fileList.pop();
    } else if (status === 'error') {
      message.error(`${info.file.name} algo falló al cargar el archivo`);
    }
  }

  const handleAction = (options) => {
    const { file, onProgress, onSuccess, onError } = options;
    const reader = new FileReader();

    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = (e.loaded / e.total) * 100;
        onProgress({ percent });
      }
    };

    reader.onload = (e) => {
      onSuccess();
      socket.emit('uploadFileToServer', e.target.result);
    };

    reader.onerror = (e) => {
      console.error("Error al leer el archivo:", e);
      onError(new Error("Error al leer el archivo"));
    };

    reader.readAsArrayBuffer(file);
  };

  socket.on('uploadFileError', (data) => {
    message.error(data.message);
  });

  socket.on('audioTranscripted', (data) => {
    console.log(data);
  })

  return {
    handleAction,
    onChange,
  }
}
