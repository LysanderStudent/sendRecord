import React, { useState } from "react";
import { Button, Col, Layout, Row, Space, Typography } from "antd";

import {
  activeStyle,
  buttonOptionStyle,
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

export const BasePage = () => {
  const projectName = "[Nombre del proyecto]";

  const { Header } = Layout;
  const { Text, Title } = Typography;

  const [activeButton, setActiveButton] = useState("upload");

  const {
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

          <Text style={{ color: "white" }}>
            Transcribe your audio files with ease. Simply upload or record, and
            let our powerful AI do the rest.
          </Text>

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

      <Space direction="vertical" style={{ marginTop: 20 }}>
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

        <Row>
          <Col>
            {activeButton === "upload" ? (
              <UploadFileComponent language={language} textUpload={upload} />
            ) : (
              <RecordComponents language={language} textRecord={record} />
            )}
          </Col>
        </Row>
      </Space>
    </>
  );
};
