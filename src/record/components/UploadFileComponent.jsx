import React from 'react';
import { Card, Progress, Space, Typography, Upload } from 'antd';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';
import { useUpload } from '../hooks/useUpload';

export const UploadFileComponent = () => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  const {
    progress,
    onChange,
    handleAction,
  } = useUpload();

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>

        <Dragger
          customRequest={handleAction}
          multiple={false}
          onChange={onChange}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <BsFileEarmarkMusicFill size={100} />
          </p>
          <Title level={3}>SUBIR GRABACION</Title>

          <Text className="ant-upload-hint">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, facere harum fuga nobis ex, dicta officia perspiciatis velit iste eum consequuntur. Dolor voluptas tenetur ipsam sit voluptate ratione consectetur sequi.
          </Text>

          {progress > 0 && <Progress percent={progress} />}
        </Dragger>

      </Space>
    </Card>
  )
}
