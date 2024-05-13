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
    <Card style={{ backgroundColor: '#EAEAEA', textAlign: 'center', height: 350 }}>
      <Space direction='vertical' align='center'>

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

          <Text italic>
            Haz clic aquí para seleccionar un archivo de audio que ya tengas guardado en tu computadora o dispositivo. Solo necesitas buscar el archivo y hacer clic en él para seleccionarlo.
          </Text>

          {progress > 0 && <Progress percent={progress} />}
        </Dragger>

      </Space>
    </Card>
  )
}
