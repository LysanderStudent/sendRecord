import React from 'react';
import { useRecord } from '../hooks/useRecord';

export const RecordPage = () => {
  const {
    status,
    mediaBlobUrl,
    startRecording,
    stopRecording,
    sendVideo,
    handleFileChange,
    handleUploadFile
  } = useRecord();

  return (
    <div>
      {status !== 'recording' && <button onClick={startRecording}>Start Recording</button>}
      {status === 'recording' && <button onClick={stopRecording}>Stop Recording</button>}
      {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay><track kind='captions'></track></audio>}
      {status === 'stopped' && <button onClick={sendVideo}>Send Video to Server</button>}

      <br/>
      <br/>
      <br/>

      <form onSubmit={handleUploadFile}>
        <input multiple={false} type="file" onChange={handleFileChange} />
        <button type="submit">Subir</button>
      </form>
    </div>
  )
}
