import React from 'react'
import { useRecord } from '../hooks/useRecord';

export const RecordPage = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl, sendVideo } = useRecord();

  return (
    <div>
      {status !== 'recording' && <button onClick={startRecording}>Start Recording</button>}
      {status === 'recording' && <button onClick={stopRecording}>Stop Recording</button>}
      {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay />}
      {status === 'stopped' && <button onClick={sendVideo}>Send Video to Server</button>}
    </div>
  )
}
