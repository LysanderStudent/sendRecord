import { useEffect, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import io from 'socket.io-client';

export const useRecord = () => {
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
                console.log({ blob })
                socket.emit('videoData', blob);
            })
    }

    return {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        sendVideo,
    }
}
