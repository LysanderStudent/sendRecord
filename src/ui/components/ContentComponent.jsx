import React from 'react';
import { Button, Col, Row, Space, Typography } from 'antd';
import { langugeButtonStyle } from '../css/styles';
import { RecordComponents } from '../../record/components/RecordComponents';
import { UploadFileComponent } from '../../record/components/UploadFileComponent';

export const ContentComponent = () => {
    const { Text } = Typography;

    return (
        <Space direction='vertical' style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'right', marginBottom: 10 }}>
                <Button style={langugeButtonStyle}>Idioma</Button>
            </div>

            <Row>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                </Text>
            </Row>

            <Row>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                </Text>
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
