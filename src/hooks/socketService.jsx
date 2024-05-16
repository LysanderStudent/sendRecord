import { message } from 'antd';
import io from 'socket.io-client';
import { TextsDisplay } from '../languages/TextsDisplay';

let socket;

const { language } = TextsDisplay();

const setupSocketListeners = () => {
    socket.on('uploadFileError', (data) => {
        message.error(data.message);
    });

    socket.on('audioTranscripted', (data) => {
        console.log("Transcripción recibida:", data.text);
    });

    socket.on('fileUploaded', (data) => {
        console.log({ language })
        message.success(data.message);
        socket.emit('transcript');
    });
};

export const getSocket = () => {
    if (!socket) {
        socket = io('http://localhost:3010');
        setupSocketListeners();
    }
    return socket;
};
