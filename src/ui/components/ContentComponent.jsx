import React from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import { langugeButtonStyle } from "../css/styles";
import { RecordComponents } from "../../record/components/RecordComponents";
import { UploadFileComponent } from "../../record/components/UploadFileComponent";
import { TextsDisplay } from "../../languages/TextsDisplay";

export const ContentComponent = ({ projectName }) => {
  const { Text } = Typography;
  const {
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    record,
    upload,
    showButtons,
    setLanguage,
    handleIdiomaClick
  } = TextsDisplay(projectName);

  return (
    <Space direction="vertical" style={{ marginTop: 20 }}>
      <div
        style={{ display: "flex", justifyContent: "right", marginRight: 10 }}
      >
        <Space direction="vertical">
          <Button style={langugeButtonStyle} onClick={handleIdiomaClick}>
            Idioma
          </Button>
          {showButtons && (
            <>
              <Button
                style={langugeButtonStyle}
                onClick={() => setLanguage("es")}
              >
                <img
                  src="ruta/para/bandera_mexico.png"
                  alt="Bandera de México"
                />
              </Button>
              <Button
                style={langugeButtonStyle}
                onClick={() => setLanguage("en")}
              >
                <img src="ruta/para/bandera_usa.png" alt="Bandera de USA" />
              </Button>
            </>
          )}
        </Space>
      </div>

      <Row>
        <Text>{firstParagraph}</Text>
      </Row>

      <Row>
        <Text>{secondParagraph}</Text>
      </Row>

      <Row>
        <Text>{thirdParagraph}</Text>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <RecordComponents textRecord={record} />
        </Col>

        <Col span={12}>
          <UploadFileComponent textUpload={upload} />
        </Col>
      </Row>
    </Space>
  );
};
