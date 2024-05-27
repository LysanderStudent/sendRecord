import { useEffect, useState } from 'react';

export const useModalNames = (speakersCount, transcription, setTranscription, setModal) => {
    const [names, setNames] = useState([]);
    const [index, setIndex] = useState(0);
    const [phraseCurrent, setPhraseCurrent] = useState("");

    useEffect(() => {
        const firstPhrase = transcription.split('\n')[0];
        const letter = generateLetters()[index];
        setPhraseCurrent(firstPhrase.substring(firstPhrase.indexOf(letter) + 2));
    }, [])

    useEffect(() => {
        if (index === speakersCount) {
            changeNamesSpeakers();
        }
    }, [index]);

    const nextPhrase = (values) => {
        if (index < speakersCount) {
            const updatedNames = [...names, values.nameSpeaker];
            setNames(updatedNames);

            if (index < speakersCount - 1) {
                const letter = generateLetters()[index + 1];
                const phrase = transcription.split(`Speaker ${letter}: `)[1];
                const justPhrase = phrase.slice(0, phrase.indexOf('\n'))

                setPhraseCurrent(justPhrase);
            }

            setIndex(index + 1);
        }
    }

    const generateLetters = () => {
        const letters = [];
        for (let i = 0; i < speakersCount; i++) {
            letters.push(String.fromCharCode(65 + i));
        }
        return letters;
    }

    const changeNamesSpeakers = () => {
        if (speakersCount < 27) {
            const letter = generateLetters();

            let t = transcription;

            for (let i = 0; i < speakersCount; i++) {
                const regex = new RegExp(`Speaker ${letter[i]}`, 'g');
                t = t.replace(regex, `${names[i]}`);
            }

            setTranscription(t)
            setModal(false);
        }

    }

    return {
        index,
        phraseCurrent,
        nextPhrase
    }
}
