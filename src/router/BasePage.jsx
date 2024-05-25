import React from "react";
import { Button, Col, Input, Layout, Popover, Row, Space, Typography } from "antd";
import { FiCopy, FiDownload } from "react-icons/fi";

import {
  activeStyle,
  colorTheme,
  inactiveStyle,
  langugeButtonStyle,
  langugeSelectedStyle,
  removeStylesButtonAntd,
  textAreaStyle,
  textAreaTrancriptionStyle,
} from "../ui/css/styles";
import { RecordComponents } from "../record/components/RecordComponents";
import { UploadFileComponent } from "../record/components/UploadFileComponent";
import { TextsDisplay } from "../languages/TextsDisplay";
import { useBasePage } from "../hooks/useBasePage";
import '../index.css';

export const BasePage = () => {
  const { Header } = Layout;
  const { Text, Title } = Typography;
  const { TextArea } = Input;

  const {
    activeButton,
    projectName,
    transcription,
    setActiveButton,
    setTranscription,
    copyToClipboard,
    downloadTranstiption
  } = useBasePage();

  const {
    headerText,
    uploadText,
    recordText,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    record,
    upload,
    language,
    setLanguage,
  } = TextsDisplay(projectName);

  return (
    <>
      <Header
        className={`h-auto lg:h-[220] bg-[${colorTheme}] flex justify-center items-center text-center`}
      >
        <Space direction="vertical" align="center">
          <Title style={{ color: "white" }} className="font-bold">{projectName}</Title>

          <Text className="text-white">{headerText}</Text>

          <Space>
            <Button
              style={language === "es" ? langugeSelectedStyle : langugeButtonStyle}
              onClick={() => setLanguage("es")}
            >
              Español
            </Button>
            <Button
              style={language === "en" ? langugeSelectedStyle : langugeButtonStyle}
              onClick={() => setLanguage("en")}
            >
              English
            </Button>
          </Space>
        </Space>
      </Header>

      <Space className="p-10 w-full text-center lg:text-start" direction="vertical">
        <Row>
          <Text>{firstParagraph}</Text>
        </Row>

        <div className="lg:hidden">
          <Row>
            <Space className="p-1 bg-gray-200 rounded-lg" direction="horizontal">
              <Button
                className={activeButton === "upload" ? activeStyle : inactiveStyle}
                onClick={() => setActiveButton("upload")}
              >
                {uploadText}
              </Button>
              <Button
                className={activeButton === "record" ? activeStyle : inactiveStyle}
                onClick={() => setActiveButton("record")}
              >
                {recordText}
              </Button>
            </Space>
          </Row>

          <Row gutter={7} className="block mt-2 lg:flex lg:justify-center lg:h-400">
            <Col className="lg:w-1/2" style={{ backgroundColor: "#F3F4F6" }}>
              {activeButton === "upload" ? (
                <UploadFileComponent setTranscription={setTranscription} language={language} textUpload={upload} />
              ) : (
                <RecordComponents setTranscription={setTranscription} language={language} textRecord={record} />
              )}
            </Col>

            <Col className={`lg:w-1/2 ${textAreaTrancriptionStyle}`}>
              <TextArea value={transcription} readOnly style={textAreaStyle} />

              <Space>
                <Popover content={language === "es" ? "Copiar" : "Copy"}>
                  <Button className="flex" onClick={copyToClipboard} style={removeStylesButtonAntd}>
                    <FiCopy size={20} />
                    <p className="ml-2 lg:hidden">{language === "es" ? "Copiar" : "Copy"}</p>
                  </Button>
                </Popover>

                <Popover content={language === "es" ? "Descargar" : "Download"}>
                  <Button className="flex" onClick={downloadTranstiption} style={removeStylesButtonAntd}>
                    <FiDownload size={20} />
                    <p className="ml-2 lg:hidden">{language === "es" ? "Descargar" : "Download"}</p>
                  </Button>
                </Popover>
              </Space>

            </Col>
          </Row>
        </div>

        <Row>
          <Text>{secondParagraph}</Text>
        </Row>

        <Row>
          <Text>{thirdParagraph}</Text>
        </Row>

        <div className="hidden lg:block">
          <Row>
            <Space className="p-1 bg-gray-200 rounded-lg" direction="horizontal">
              <Button
                className={activeButton === "upload" ? activeStyle : inactiveStyle}
                onClick={() => setActiveButton("upload")}
              >
                {uploadText}
              </Button>
              <Button
                className={activeButton === "record" ? activeStyle : inactiveStyle}
                onClick={() => setActiveButton("record")}
              >
                {recordText}
              </Button>
            </Space>
          </Row>

          <Row gutter={7} className="block mt-2 lg:flex lg:justify-center lg:h-400">
            <Col className="lg:w-1/2" style={{ backgroundColor: "#F3F4F6" }}>
              {activeButton === "upload" ? (
                <UploadFileComponent setTranscription={setTranscription} language={language} textUpload={upload} />
              ) : (
                <RecordComponents setTranscription={setTranscription} language={language} textRecord={record} />
              )}
            </Col>

            <Col className={`lg:w-1/2 ${textAreaTrancriptionStyle}`}>
              <TextArea value={transcription} readOnly style={textAreaStyle} />

              <Space>
                <Popover content={language === "es" ? "Copiar" : "Copy"}>
                  <Button className="flex" onClick={copyToClipboard} style={removeStylesButtonAntd}>
                    <FiCopy size={20} />
                    <p className="ml-2 lg:hidden">{language === "es" ? "Copiar" : "Copy"}</p>
                  </Button>
                </Popover>

                <Popover content={language === "es" ? "Descargar" : "Download"}>
                  <Button className="flex" onClick={downloadTranstiption} style={removeStylesButtonAntd}>
                    <FiDownload size={20} />
                    <p className="ml-2 lg:hidden">{language === "es" ? "Descargar" : "Download"}</p>
                  </Button>
                </Popover>
              </Space>

            </Col>
          </Row>
        </div>
      </Space >
    </>
  );
};
