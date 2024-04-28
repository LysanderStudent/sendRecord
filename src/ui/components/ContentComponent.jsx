import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { langugeButtonStyle } from '../css/styles';

export const ContentComponent = () => {
    const { Text } = Typography;
    const { Content } = Layout;

    return (
        <Content style={{ marginTop: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'right', marginBottom: 10 }}>
                <Button style={langugeButtonStyle}>Idioma</Button>
            </div>

            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.

                <br />
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident dolores molestias velit quia, quis repudiandae culpa cumque sapiente quas debitis, ullam atque aliquid cum, nam iure vitae quod quaerat.
            </Text>
        </Content>
    )
}
