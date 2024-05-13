import React, { useEffect, useState } from 'react'

export const TextsDisplay = (language = 'es') => {
    const projectName = '[Nombre del proyecto]';
    const [firstParagraph, setFirstParagraph] = useState();
    const [secondParagraph, setSecondParagraph] = useState();
    const [thirdParagraph, setThirdParagraph] = useState();

    useEffect(() => {
        if (language === 'es') {
            setFirstParagraph(`Bienvenido a ${projectName}, tu herramienta especializada en la transcripción de audio a texto para podcasts. Con ${projectName}, convertir tu contenido auditivo en texto nunca ha sido tan fácil. Nuestra plataforma ofrece una manera sencilla y eficiente de transcribir tus archivos de audio en texto escrito, lo que te permite acceder al contenido de tus podcasts de una forma más accesible y versátil.`)

            setSecondParagraph(`
            ¿Cómo funciona? Es simple:
            \n
            1.- Sube tu archivo de audio: Si tienes grabaciones de audio que necesitas transcribir, simplemente selecciona la opción 'Subir grabacion' y carga tu contenido. Nuestra plataforma se encargará del resto.
            \n
            2.- Recibe la transcripción: Una vez que hayas subido tu archivo de audio, ${projectName} trabajará diligentemente para transcribir el contenido a texto. En poco tiempo, recibirás la transcripción completa y precisa de tu audio.
            `)

            setThirdParagraph(`Con ${projectName}, obtén transcripciones precisas y de calidad para tus podcasts, facilitando la edición, búsqueda y accesibilidad de tu contenido auditivo. Únete a nuestra comunidad de creadores de podcasts hoy mismo y lleva tus proyectos auditivos al siguiente nivel con ${projectName}.`)
        } else if (language === 'en') {
            setFirstParagraph(`Welcome to ${projectName}, your specialized tool for audio to text transcription for podcasts. With ${projectName}, converting your audio content into text has never been easier. Our platform offers a simple and efficient way to transcribe your audio files into written text, allowing you to access your podcast content in a more accessible and versatile way.`)

            setSecondParagraph(`
            How does it work? It's simple:
            \n

            1.- Upload your audio file: If you have audio recordings that need to be transcribed, simply select the 'Upload recording' option and upload your content. Our platform will take care of the rest.
            \n
            2.- Receive the transcription: Once you have uploaded your audio file, ${projectName} will work diligently to transcribe the content into text. In no time, you will receive the complete and accurate transcription of your audio.
            `)

            setThirdParagraph(`With ${projectName}, get accurate and quality transcriptions for your podcasts, making editing, searching, and accessing your audio content easier. Join our community of podcast creators today and take your audio projects to the next level with ${projectName}.`)
        }

    }, [])


    return {
        firstParagraph,
        secondParagraph,
        thirdParagraph
    }
}
