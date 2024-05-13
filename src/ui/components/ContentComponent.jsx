import React from 'react';
import { Button, Col, Row, Space, Typography } from 'antd';
import { langugeButtonStyle } from '../css/styles';
import { RecordComponents } from '../../record/components/RecordComponents';
import { UploadFileComponent } from '../../record/components/UploadFileComponent';
import { TextsDisplay } from '../../languages/TextsDisplay';

export const ContentComponent = () => {
    const { Text } = Typography;
    const { firstParagraph, secondParagraph, thirdParagraph } = TextsDisplay();

    return (
        <Space direction='vertical' style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'right', marginBottom: 10 }}>
                <Button style={langugeButtonStyle}>Idioma</Button>
            </div>

            <Row>
                <Text>{firstParagraph}</Text>
            </Row>

            <Row>
                <Text>{secondParagraph}</Text>
            </Row>

            <Row>
                <Text>{thirdParagraph}</Text>
            </Row>

            <Row gutter={20}>
                <Col span={12}>
                    <RecordComponents />
                </Col>

                <Col span={12}>
                    <UploadFileComponent />
                </Col>
            </Row>
        </Space >
    )
}
