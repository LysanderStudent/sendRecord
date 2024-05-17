import React from "react";
import { Button, Card, Space, Typography, Row, Col } from "antd";
import { BsFillMicFill } from "react-icons/bs";
import { useRecord } from "../hooks/useRecord";

export const RecordComponents = ({ textRecord, language }) => {
  const { Text } = Typography;
  const { status, message, mediaBlobUrl, handleActionRecord, sendAudio } =
    useRecord(textRecord?.status, language);

  return (
    <Card
      style={{ backgroundColor: "#EAEAEA", textAlign: "center", height: 350 }}
    >
      <Space direction="vertical">
        <Row>
          <BsFillMicFill size={50} />
          <Button onClick={handleActionRecord} type="primary">
            {message}
          </Button>
        </Row>

        <div style={{ width: "75%" }}>
          <Text style={{ textAlign: "center" }} italic>
            {textRecord?.description}
          </Text>
        </div>

        <Row gutter={5}>
          <Col>
            <Button onClick={handleActionRecord} level={3}>
              {message}
            </Button>
          </Col>
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
        </Row>

        <Text italic>{textRecord?.description}</Text>
      </Space>
    </Card>
  );
};
