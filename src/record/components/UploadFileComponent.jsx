import React from "react";
import { Card, Progress, Space, Typography, Upload } from "antd";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { useUpload } from "../hooks/useUpload";
import { FiShare } from "react-icons/fi";

export const UploadFileComponent = ({ textUpload, language }) => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  const { progress, onChange, handleAction } = useUpload(language);

  return (
    <Dragger
      customRequest={handleAction}
      multiple={false}
      onChange={onChange}
      showUploadList={false}
      style={{ background: '#F3F4F6', color: '#9CA3AF' }}
    >
      <p className="ant-upload-drag-icon">
        <FiShare size={100} />
      </p>
      <Title level={3}>{textUpload?.title}</Title>

      <Text italic>{textUpload?.description}</Text>

      {progress > 0 && <Progress percent={progress} />}
    </Dragger>
  );
};
