import React from "react";
import { Progress, Typography, Upload } from "antd";
import { FiShare } from "react-icons/fi";
import PropTypes from 'prop-types';

import { draggerStyle } from '../../ui/css/styles';
import { useUpload } from "../hooks/useUpload";

export const UploadFileComponent = ({ textUpload, language, setTranscription }) => {
  const { Title, Text } = Typography;
  const { Dragger } = Upload;

  const { progress, onChange, handleAction } = useUpload(language, setTranscription);

  return (
    <Dragger
      customRequest={handleAction}
      multiple={false}
      onChange={onChange}
      showUploadList={false}
      style={draggerStyle}
    >
      <p className="ant-upload-drag-icon flex justify-center">
        <FiShare size={100} />
      </p>
      <Title level={3}>{textUpload?.title}</Title>

      <Text italic>{textUpload?.description}</Text>

      {progress > 0 && <Progress percent={progress} />}
    </Dragger>
  );
};

UploadFileComponent.propTypes = {
  textUpload: PropTypes.object,
  language: PropTypes.string.isRequired,
  setTranscription: PropTypes.func.isRequired
};
