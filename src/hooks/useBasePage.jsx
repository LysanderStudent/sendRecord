import { message } from 'antd';
import { useState } from 'react'

export const useBasePage = () => {
    const projectName = "[Nombre del proyecto]";
    const [transcription, setTranscription] = useState("");
    const [activeButton, setActiveButton] = useState("upload");

    useEffect(() => {
        const test = async () => {
            await fetch(import.meta.env.VITE_BACKEND_URL)
        }
        test();
    }, [activeButton]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transcription);
        message.success("Transcripción copiada al portapapeles");
    }

    const downloadTranstiption = () => {
        const element = document.createElement("a");
        const file = new Blob([transcription], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "transcription.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return {
        projectName,
        transcription,
        activeButton,
        setTranscription,
        setActiveButton,
        copyToClipboard,
        downloadTranstiption
    }
}
