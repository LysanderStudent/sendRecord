import { message } from 'antd';
import { useEffect, useState } from 'react'

export const useBasePage = () => {
    const projectName = "The ClerkTranscript";
    const [transcription, setTranscription] = useState("");
    const [speakersCount, setSpeakersCount] = useState(0);
    const [activeButton, setActiveButton] = useState("upload");
    const [loading, setLoading] = useState(false);
    const [saveRecord, setSaveRecord] = useState(false);
    const [modal, setModal] = useState(false);
    const [names, setNames] = useState([]);
    const [reassignNames, setReassignNames] = useState([]);

    useEffect(() => {
        if(saveRecord) {
            message.open({
                type: 'loading',
                content: 'Guardando grabación...',
                key: 'uploading',
            });
        } else {
            message.destroy('uploading');
        }
    }, [saveRecord]);

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
        modal,
        projectName,
        transcription,
        activeButton,
        speakersCount,
        loading,
        names,
        reassignNames,
        setNames,
        setReassignNames,
        setLoading,
        setSpeakersCount,
        setTranscription,
        setActiveButton,
        copyToClipboard,
        downloadTranstiption,
        setModal,
        setSaveRecord,
    }
}
