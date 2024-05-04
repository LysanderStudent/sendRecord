import io from 'socket.io-client';
import { message } from 'antd';

const socket = io('http://localhost:3010');

const setupSocketListeners = () => {
    socket.on('uploadFileError', (data) => {
        message.error(data.message);
    });

    socket.on('audioTranscripted', (data) => {
        console.log("Transcripción recibida:", data.text);
    });

    socket.on('fileUploaded', () => {
        message.success("Archivo guardado exitosamente. Iniciando transcripción...");
        //     socket.emit('transcript');
    });

    return socket;
};

export const getSocket = () => {
    setupSocketListeners();
    return socket;
};
