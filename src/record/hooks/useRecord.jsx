import axios from 'axios';
import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import io from 'socket.io-client';

export const useRecord = () => {
    const [file, setFile] = useState(null);

    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
        audio: true,
    });

    useEffect(() => {
        if (status === 'stopped') {
            sendVideo();
        }
    }, [status]);

    const socket = io('http://localhost:3010/transcription');

    const sendVideo = async () => {
        await fetch(mediaBlobUrl)
            .then(res => res.blob())
            .then(blob => {
                try {
                    console.log({ blob })
                    socket.emit('recorderData', blob);
                } catch (error) {
                    console.error({ error })
                }
            }).catch(err => console.error({ err }))
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Por favor, selecciona un archivo.");
            return;
        }

        console.log({ file });
        const res = socket.emit('recorderData', file);
        console.log({ res });
    };

    return {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        sendVideo,
        handleFileChange,
        handleSubmit
    }
}
