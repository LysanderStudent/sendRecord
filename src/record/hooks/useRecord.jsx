import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import io from 'socket.io-client';

export const useRecord = () => {
    const [message, setMessage] = useState('INICIAR GRABACION');

    const { status, mediaBlobUrl, startRecording, stopRecording } = useReactMediaRecorder({
        audio: true,
    });

    useEffect(() => {
        switch (status) {
            case 'idle': setMessage('INICIAR GRABACION'); break;
            case 'recording': setMessage('DETENER GRABACION'); break;
            case 'stopped': setMessage('COMENZAR OTRA GRABACION'); break;
        }

        if (status === 'stopped') {
            sendVideo();
        }
    }, [status]);

    const socket = io('http://localhost:3010/transcription');

    const handleActionRecord = () => {
        if (message === 'INICIAR GRABACION') {
            startRecording();
        } else if (message === 'DETENER GRABACION') {
            stopRecording();
        }
    }

    const sendVideo = async () => {
        await fetch(mediaBlobUrl)
            .then(res => res.blob())
            .then(blob => {
                try {
                    console.log({ blob })
                    // socket.emit('recorderData', blob);
                } catch (error) {
                    console.error({ error })
                }
            }).catch(err => console.error({ err }))
    }

    return {
        status,
        mediaBlobUrl,
        message,
        handleActionRecord,
        sendVideo,
    }
}
