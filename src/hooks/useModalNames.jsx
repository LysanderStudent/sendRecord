import { useEffect, useState } from 'react';

export const useModalNames = ({
    names,
    reassignNames,
    setNames,
    setReassignNames,
    speakersCount,
    transcription,
    setTranscription,
    setModal,
    form
}) => {
    const [index, setIndex] = useState(0);
    const [phraseCurrent, setPhraseCurrent] = useState("");

    useEffect(() => {
        if(names.length === speakersCount) {
            setReassignNames(names);
        }
    }, []);

    useEffect(() => {
        if (index < speakersCount) {
            setPhraseCurrent(removeSpakerLabel());
        } else {
            changeNamesSpeakers();
        }
    }, [index]);

    const removeSpakerLabel = () => {
        let phrase = "";

        if (names.length === speakersCount) {
            phrase = transcription.split(`${names[index]}: `)[1];
        } else {
            const letter = generateLetters()[index];
            phrase = transcription.split(`Speaker ${letter}: `)[1];
        }
            
        return phrase.slice(0, phrase.indexOf('\n'));
    }

    const nextPhrase = (values) => {
        if (names.length === speakersCount) {
            const updatedNames = [...reassignNames];
            updatedNames[index] = values.nameSpeaker;
            setReassignNames(updatedNames);
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

            if(reassignNames.length > 0) {
                for (let i = 0; i < speakersCount; i++) {
                    const regex = new RegExp(names[i], 'g');
                    t = t.replace(regex, reassignNames[i]);
                }

                setNames(reassignNames);
                setReassignNames([]);
            } else {
                for (let i = 0; i < speakersCount; i++) {
                    const regex = new RegExp(`Speaker ${letter[i]}`, 'g');
                    t = t.replace(regex, names[i]);
                }
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
