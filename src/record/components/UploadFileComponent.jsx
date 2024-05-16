import React from "react";
import { Card, Progress, Space, Typography, Upload } from "antd";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { useUpload } from "../hooks/useUpload";

export const UploadFileComponent = ({ textUpload, language }) => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  const { progress, onChange, handleAction } = useUpload(language);

  return (
    <Card
      style={{ backgroundColor: "#EAEAEA", textAlign: "center", height: 350 }}
    >
      <Space direction="vertical" align="center">
        <Dragger
          customRequest={handleAction}
          multiple={false}
          onChange={onChange}
          showUploadList={false}
        >
          <p className="ant-upload-drag-icon">
            <BsFileEarmarkMusicFill size={100} />
          </p>
          <Title level={3}>{textUpload?.title}</Title>

          <Text italic>{textUpload?.description}</Text>

          {progress > 0 && <Progress percent={progress} />}
        </Dragger>
      </Space>
    </Card>
  );
};
