import React, { useEffect, useState } from "react";

export const TextsDisplay = (projectName) => {
  const [firstParagraph, setFirstParagraph] = useState();
  const [secondParagraph, setSecondParagraph] = useState();
  const [thirdParagraph, setThirdParagraph] = useState();
  const [record, setRecord] = useState();
  const [upload, setUpload] = useState();
  const [headerText, setHeaderText] = useState();
  const [uploadText, setUploadText] = useState();
  const [recordText, setRecordText] = useState();
  const [whoIsText, setWhoIsText] = useState();
  const [nextText, setNextText] = useState();
  const [finishText, setFinishText] = useState();
  const [assignNames, setAssignNames] = useState();
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    changeTextLanguage();
  }, [language]);

  const changeTextLanguage = () => {
    let first, second, third, headerText, uploadText, recordText, whoIsText, nextText, finishText, assignNames;

    const record = {
      description: "",
      sendRecord: "",
      status: {
        initial: "",
        recording: "",
        finished: "",
      },
    };

    const upload = {
      description: "",
      title: "",
    };

    if (language === "es") {
      headerText =
        "Transcribe tus archivos de audio con facilidad. Simplemente carga o graba, y deja que nuestra poderosa IA haga el resto.";

      first = (
        <>
        Bienvenido a {projectName}, tu herramienta especializada en la transcripción de audio a texto.
        <br />
        Para aquella reunión que tuvo y es mucho más rápido leer que tener que escucharla desde 0. 
        <br />
        Eres reportero y fueron varios los entrevistados no te preocupes nuestra herramienta separa los oradores que participaron en tú grabación para facilitar el trabajo en tú artículo. 
        <br />
        Para cuando te graben en tú momento de inspiración y quieras recordar esas bellas palabras que salieron de tú corazón con las cuales se podrías hacer canciones, poemas, frases celebre, etc. {projectName} es para ti.
        <br />
        Con {projectName}, convertir tu contenido auditivo en texto nunca ha sido tan fácil. Nuestra plataforma ofrece una manera sencilla y eficiente de transcribir tus archivos de audio en texto escrito, lo que te permite acceder al contenido de tus audios de una forma más accesible y versátil.
        <br />
        Sin mencionar que puedes guardar dicha transcripción.
        </>        
      );

      second = (
        <>
          ¿Cómo funciona? Es simple:
          <br />
          1.- Sube tu archivo de audio: Si tienes grabaciones de audio que
          necesitas transcribir, simplemente selecciona la opción 'Subir
          grabacion' y carga tu contenido. Nuestra plataforma se encargará del
          resto.
          <br />
          2.- Recibe la transcripción: Una vez que hayas subido tu archivo de
          audio, {projectName} trabajará diligentemente para transcribir el
          contenido a texto. En poco tiempo, recibirás la transcripción completa
          y precisa de tu audio.
        </>
      );

      third = `Con ${projectName}, obtén transcripciones precisas y de calidad para tus podcasts, facilitando la edición, búsqueda y accesibilidad de tu contenido auditivo. Únete a nuestra comunidad de creadores de podcasts hoy mismo y lleva tus proyectos auditivos al siguiente nivel con ${projectName}.`;

      uploadText = "Subir Grabación";
      recordText = "Crear Grabación";

      assignNames = "Asignar nombres";
      whoIsText = "¿Quién dice esta frase?";
      nextText = "Siguiente";
      finishText = "Finalizar";

      record.description =
        "Haz clic aquí para comenzar a grabar audio directamente desde tu dispositivo. Esta opción activará el micrófono de tu dispositivo para que puedas empezar a grabar.";
      record.sendRecord = "ENVIAR GRABACION";
      record.status.initial = "INICIAR GRABACION";
      record.status.recording = "DETENER GRABACION";
      record.status.finished = "COMENZAR OTRA GRABACION";

      upload.description =
        "Haz clic aquí para seleccionar un archivo de audio que ya tengas guardado en tu computadora o dispositivo. Solo necesitas buscar el archivo y hacer clic en él para seleccionarlo.";
      upload.title = "SUBIR GRABACION";
    } else if (language === "en") {
      headerText =
        "Transcribe your audio files with ease. Simply upload or record, and let our powerful AI do the rest.";

      first = (
        <>
        Welcome to {projectName}, your tool specialized in transcribing audio to text.
        <br />
        For that meeting you had and it's much faster to read than having to listen to it from 0.
        <br />
        You are a reporter and there were several people interviewed, don't worry, our tool separates the speakers who participated in your recording to facilitate the work on your article.
        <br />
        For when they record you in your moment of inspiration and you want to remember those beautiful words that came from your heart with which you could make songs, poems, famous phrases, etc. {projectName} is for you.
        <br />
        With {projectName}, converting your listening content to text has never been easier. Our platform offers a simple and efficient way to transcribe your audio files into written text, allowing you to access the content of your audios in a more accessible and versatile way.
        <br />
        Not to mention that you can save said transcription.
        </>        
      );

      second = (
        <>
          How does it work? It's simple:
          <br />
          1.- Upload your audio file: If you have audio recordings that need to
          be transcribed, simply select the 'Upload recording' option and upload
          your content. Our platform will take care of the rest.
          <br />
          2.- Receive the transcription: Once you have uploaded your audio file,
          {projectName} will work diligently to transcribe the content into
          text. In no time, you will receive the complete and accurate
          transcription of your audio.
        </>
      );

      third = `With ${projectName}, get accurate and quality transcriptions for your podcasts, making editing, searching, and accessing your audio content easier. Join our community of podcast creators today and take your audio projects to the next level with ${projectName}.`;

      uploadText = "Upload Audio";
      recordText = "Record Audio";

      assignNames = "Assign names";
      whoIsText = "Who says this phrase?";
      nextText = "Next";
      finishText = "Finish";

      record.description =
        "Click here to start recording audio directly from your device. This option will activate your device's microphone so you can begin recording.";
      record.sendRecord = "SEND RECORDING";
      record.status.initial = "START RECORDING";
      record.status.recording = "STOP RECORDING";
      record.status.finished = "START ANOTHER RECORDING";

      upload.description =
        "Click here to select an audio file that you already have saved on your computer or device. You just need to browse for the file and click on it to select it.";
      upload.title = "UPLOAD RECORDING";
    }

    setHeaderText(headerText);
    setUploadText(uploadText);
    setRecordText(recordText);
    setFirstParagraph(first);
    setSecondParagraph(second);
    setThirdParagraph(third);
    setAssignNames(assignNames);
    setWhoIsText(whoIsText);
    setNextText(nextText);
    setFinishText(finishText);
    setRecord(record);
    setUpload(upload);
  };

  return {
    headerText,
    uploadText,
    recordText,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    assignNames,
    whoIsText,
    nextText,
    finishText,
    record,
    upload,
    language,
    setLanguage,
  };
};
