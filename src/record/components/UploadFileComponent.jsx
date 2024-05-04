import React from 'react';
import { Card, Space, Typography, Upload } from 'antd';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';
import { useUpload } from '../hooks/useUpload';

export const UploadFileComponent = () => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  const {
    onChange,
    handleAction,
  } = useUpload();

  return (
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center' }}>
      <Space direction='vertical' size='small' align='center'>

        <Dragger
          // Eliminamos el `action` para evitar la solicitud HTTP
          action={null} // No se realiza una solicitud HTTP
          customRequest={handleAction} // El envío se realiza a través del socket
          multiple={false}
          onChange={onChange}
          // showUploadList={false}
        >
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
