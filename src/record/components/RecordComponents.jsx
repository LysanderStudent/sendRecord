import React from "react";
import { Button, Card, Space, Typography, Row, Col } from "antd";
import { AiTwotoneAudio } from "react-icons/ai";
import { useRecord } from "../hooks/useRecord";

export const RecordComponents = ({ textRecord, language }) => {
  const { Text } = Typography;
  const { status, message, mediaBlobUrl, handleActionRecord, sendAudio } =
    useRecord(textRecord?.status, language);

  return (
    <Card
      style={{ backgroundColor: "#F3F4F6", textAlign: "center", padding: 40 }}
    >
      <Space direction="vertical">
        <div style={{ height: 100 }}>
          <Button style={{ display: 'flex', alignItems: 'center', background: 'none', border: 0, boxShadow: 'none', height: '50%', marginBottom: 10 }} onClick={handleActionRecord}>
            <AiTwotoneAudio size={50} />
            {message}
          </Button>

          {status === "stopped" && (
            <>
              <Col>
                <audio src={mediaBlobUrl} controls autoPlay>
                  <track kind="captions"></track>
                </audio>
              </Col>
              <Col>
                <Button onClick={sendAudio}>{textRecord?.sendRecord}</Button>
              </Col>
            </>
          )}
        </div>

        <Row style={{ marginTop: 70 }}>
          <Text italic style={{ textAlign: "center", color: "#6B7280" }}>
            {textRecord?.description}
          </Text>
        </Row>

      </Space>
    </Card>
  );
};
