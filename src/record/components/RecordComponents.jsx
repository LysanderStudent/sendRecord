import { Button, Card, Space, Typography } from 'antd';
import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { useRecord } from '../hooks/useRecord';

export const RecordComponents = () => {
  const { Text } = Typography;
  const {
    status,
    message,
    mediaBlobUrl,
    handleActionRecord,
    sendVideo,
  } = useRecord();

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>
        <BsFillMicFill size={100} />

        <Button onClick={handleActionRecord} level={3}>{message}</Button>
        {status === 'stopped' &&
          <>
            <audio src={mediaBlobUrl} controls autoPlay><track kind='captions'></track></audio>
            <Button onClick={sendVideo}>ENVIAR GRABACION</Button>
          </>
        }

        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, facere harum fuga nobis ex, dicta officia perspiciatis velit iste eum consequuntur. Dolor voluptas tenetur ipsam sit voluptate ratione consectetur sequi.
        </Text>
      </Space>
    </Card>
  )
}
