import { Card, Space, Typography, Upload } from 'antd';
import React from 'react';
import { BsFileEarmarkMusicFill, BsFillInboxFill } from 'react-icons/bs';

export const UploadFileComponent = () => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>

        <Dragger>
          <p className="ant-upload-drag-icon">
            <BsFileEarmarkMusicFill size={100} />
          </p>
          <Title level={3}>SUBIR GRABACION</Title>
          <Text className="ant-upload-hint">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, facere harum fuga nobis ex, dicta officia perspiciatis velit iste eum consequuntur. Dolor voluptas tenetur ipsam sit voluptate ratione consectetur sequi.
          </Text>
        </Dragger>

      </Space>
    </Card>
  )
}
