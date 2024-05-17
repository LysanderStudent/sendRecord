import React, { useState } from "react";
import { Button, Col, Input, Layout, Popover, Row, Space, Typography } from "antd";
import { FiCopy, FiDownload } from "react-icons/fi";

import {
  activeStyle,
  buttonsOption,
  headerStyle,
  inactiveStyle,
  langugeButtonStyle,
  langugeSelectedStyle,
  textStyle,
} from "../ui/css/styles";
import { RecordComponents } from "../record/components/RecordComponents";
import { UploadFileComponent } from "../record/components/UploadFileComponent";
import { TextsDisplay } from "../languages/TextsDisplay";
import '../index.css';

export const BasePage = () => {
  const projectName = "[Nombre del proyecto]";

  const { Header } = Layout;
  const { Text, Title } = Typography;
  const { TextArea } = Input;

  const [transcription, setTranscription] = useState("prueba");
  const [activeButton, setActiveButton] = useState("upload");

  const {
    headerText,
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
              style={
                language === "es" ? langugeSelectedStyle : langugeButtonStyle
              }
              onClick={() => setLanguage("es")}
            >
              Español
            </Button>
            <Button
              style={
                language === "en" ? langugeSelectedStyle : langugeButtonStyle
              }
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
              Upload Audio
            </Button>
            <Button
              style={activeButton === "record" ? activeStyle : inactiveStyle}
              onClick={() => setActiveButton("record")}
            >
              Record Audio
            </Button>
          </Space>
        </Row>

        <Row gutter={7} style={{ display: "flex", justifyContent: "center", height: 400 }}>
          <Col span={12} style={{ backgroundColor: "#F3F4F6" }}>
            {activeButton === "upload" ? (
              <UploadFileComponent language={language} textUpload={upload} />
            ) : (
              <RecordComponents language={language} textRecord={record} />
            )}
          </Col>

          <Col span={12} style={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
            <TextArea value={transcription} readOnly style={{ resize: "none", height: 400 }} />

            <Popover content={language === "es" ? "Copiar" : "Copy"}>
              <Button style={{ border: 0, boxShadow: 'none' }}>
                <FiCopy size={20} />
              </Button>
            </Popover>

            <Popover content={language === "es" ? "Descargar" : "Download"}>
              <Button style={{ border: 0, boxShadow: 'none' }}>
                <FiDownload size={20} />
              </Button>
            </Popover>
          </Col>
        </Row>
      </Space>
    </>
  );
};
