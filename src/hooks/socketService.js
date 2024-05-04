import io from 'socket.io-client';
import { message } from 'antd';

const socket = io('http://localhost:3010');

// Definir eventos y funciones de manejo comunes
const setupSocketListeners = () => {
    socket.on('uploadFileError', (data) => {
        message.error(data.message);
    });

    socket.on('audioTranscripted', (data) => {
        console.log("Transcripción recibida:", data);
    });

    return socket;
};

export const getSocket = () => {
    setupSocketListeners();
    return socket;
};
