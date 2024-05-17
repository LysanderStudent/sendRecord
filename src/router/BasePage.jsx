import React from "react";
import { Button, Col, Input, Layout, Popover, Row, Space, Typography } from "antd";
import { FiCopy, FiDownload } from "react-icons/fi";

import {
  RowTranscriptionOptionsStyle,
  activeStyle,
  buttonsOption,
  headerStyle,
  inactiveStyle,
  langugeButtonStyle,
  langugeSelectedStyle,
  removeStylesButtonAntd,
  textAreaStyle,
  textAreaTrancriptionStyle,
  textStyle,
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
      <Header style={headerStyle}>
        <Space direction="vertical" align="center">
          <Title style={textStyle}>{projectName}</Title>

          <Text style={{ color: "white" }}>{headerText}</Text>

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

      <Space direction="vertical" style={{ padding: 40 }}>
        <Row>
          <Text>{firstParagraph}</Text>
        </Row>

        <Row>
          <Text>{secondParagraph}</Text>
        </Row>

        <Row>
          <Text>{thirdParagraph}</Text>
        </Row>

        <Row>
          <Space style={buttonsOption} direction="horizontal">
            <Button
              style={activeButton === "upload" ? activeStyle : inactiveStyle}
              onClick={() => setActiveButton("upload")}
            >
              {uploadText}
            </Button>
            <Button
              style={activeButton === "record" ? activeStyle : inactiveStyle}
              onClick={() => setActiveButton("record")}
            >
              {recordText}
            </Button>
          </Space>
        </Row>

        <Row gutter={7} style={RowTranscriptionOptionsStyle}>
          <Col span={12} style={{ backgroundColor: "#F3F4F6" }}>
            {activeButton === "upload" ? (
              <UploadFileComponent setTranscription={setTranscription} language={language} textUpload={upload} />
            ) : (
              <RecordComponents setTranscription={setTranscription} language={language} textRecord={record} />
            )}
          </Col>

          <Col span={12} style={textAreaTrancriptionStyle}>
            <TextArea value={transcription} readOnly style={textAreaStyle} />

            <Popover content={language === "es" ? "Copiar" : "Copy"}>
              <Button onClick={copyToClipboard} style={removeStylesButtonAntd}>
                <FiCopy size={20} />
              </Button>
            </Popover>

            <Popover content={language === "es" ? "Descargar" : "Download"}>
              <Button onClick={downloadTranstiption} style={removeStylesButtonAntd}>
                <FiDownload size={20} />
              </Button>
            </Popover>
          </Col>
        </Row>
      </Space>
    </>
  );
};
