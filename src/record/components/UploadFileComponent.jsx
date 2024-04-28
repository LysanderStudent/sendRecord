import { Card, Space, Typography, Upload } from 'antd';
import React from 'react';
import { BsFileEarmarkMusicFill, BsFillInboxFill } from 'react-icons/bs';

export const UploadFileComponent = () => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>
        <BsFileEarmarkMusicFill size={100} />

        <Title level={3}>SUBIR GRABACION</Title>

        <Dragger>
          <p className="ant-upload-drag-icon">
            <BsFillInboxFill size={50} />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
          </p>
        </Dragger>

        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, facere harum fuga nobis ex, dicta officia perspiciatis velit iste eum consequuntur. Dolor voluptas tenetur ipsam sit voluptate ratione consectetur sequi.
        </Text>
      </Space>
    </Card>
  )
}
