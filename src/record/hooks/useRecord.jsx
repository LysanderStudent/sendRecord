import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { getSocket } from '../../hooks/socketService';

export const useRecord = () => {
    const socket = getSocket();
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
            sendAudio();
        }
    }, [status]);

    const handleActionRecord = () => {
        if (message !== 'DETENER GRABACION') {
            startRecording();
        } else {
            stopRecording();
        }
    }

    const sendAudio = async () => {
        await fetch(mediaBlobUrl)
            .then(res => res.blob())
            .then(blob => {
                try {
                    console.log({ blob })
                    socket.emit('uploadFileToServer', blob)
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
        sendAudio,
    }
}
