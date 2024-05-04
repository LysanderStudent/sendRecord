import React from 'react';
import { Button, Card, Space, Typography, Row, Col } from 'antd';
import { BsFillMicFill } from 'react-icons/bs';
import { useRecord } from '../hooks/useRecord';

export const RecordComponents = () => {
  const { Text } = Typography;
  const {
    status,
    message,
    mediaBlobUrl,
    handleActionRecord,
    sendAudio,
  } = useRecord();

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>
        <BsFillMicFill size={100} />

        <Row gutter={5}>
          <Col><Button onClick={handleActionRecord} level={3}>{message}</Button></Col>
          {status === 'stopped' &&
            <>
              <Col><audio src={mediaBlobUrl} controls autoPlay><track kind='captions'></track></audio></Col>
              <Col><Button onClick={sendAudio}>ENVIAR GRABACION</Button></Col>
            </>
          }
        </Row>

        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, facere harum fuga nobis ex, dicta officia perspiciatis velit iste eum consequuntur. Dolor voluptas tenetur ipsam sit voluptate ratione consectetur sequi.
        </Text>
      </Space>
    </Card>
  )
}
