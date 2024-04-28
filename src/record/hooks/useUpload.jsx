import { useState } from 'react';
import io from 'socket.io-client';

export const useUpload = () => {
  const [file, setFile] = useState(null);
  const socket = io('http://localhost:3010/transcription');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecciona un archivo.");
      return;
    }

    // socket.emit('recorderData', file);
  };

  return {
    file,
    handleFileChange,
    handleUploadFile
  }
}
