import { useEffect, useState } from 'react';

export const useModalNames = (names, setNames, speakersCount, transcription, setTranscription, setModal, form) => {
    const [index, setIndex] = useState(0);
    const [phraseCurrent, setPhraseCurrent] = useState("");

    useEffect(() => {
        if (index < speakersCount) {
            setPhraseCurrent(removeSpakerLabel());
        } else {
            changeNamesSpeakers();
        }
    }, [index]);

    const removeSpakerLabel = () => {
        let justPhrase = "";

        if (names.length === speakersCount) {
            console.log(names[index])
            justPhrase = names[index].slice(names[index] + 2);
        } else {
            const letter = generateLetters()[index];
            const phrase = transcription.split(`Speaker ${letter}: `)[1];
            justPhrase = phrase.slice(0, phrase.indexOf('\n'))
        }

        return justPhrase;
    }

    const nextPhrase = (values) => {
        if (names.length === speakersCount) {
            const updatedNames = [...names];
            updatedNames[index] = values.nameSpeaker;
            setNames(updatedNames);
        } else {
            const updatedNames = [...names, values.nameSpeaker];
            setNames(updatedNames);
        }

        setIndex(index + 1);
        form.resetFields();
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
