import React from "react";
import { Button, Card, Space, Typography, Row, Col } from "antd";
import { AiTwotoneAudio } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useRecord } from "../hooks/useRecord";
import {
  cardRecordStyle,
  buttonStartRecordStyle,
  textRecordStyle
} from '../../ui/css/styles';

export const RecordComponents = ({ textRecord, language, setTranscription }) => {
  const { Text } = Typography;
  const { status, message, mediaBlobUrl, handleActionRecord, sendAudio } =
    useRecord(textRecord?.status, language, setTranscription);

  return (
    <Card
      style={cardRecordStyle}
    >
      <Space direction="vertical">
        <div style={{ height: 100 }}>
          <Button style={buttonStartRecordStyle} onClick={handleActionRecord}>
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
          <Text italic style={textRecordStyle}>
            {textRecord?.description}
          </Text>
        </Row>

      </Space>
    </Card>
  );
};

RecordComponents.propTypes = {
  textRecord: PropTypes.object,
  language: PropTypes.string.isRequired,
  setTranscription: PropTypes.func.isRequired
}