import React from 'react';
import { Layout, Typography } from 'antd';
import { headerStyle, textStyle } from '../css/styles';

export const HeaderComponent = () => {
    const { Header } = Layout;
    const { Text } = Typography;

    return (
        <Header style={headerStyle}>
            <Text style={textStyle}>
                Nombre Del Proyecto
            </Text>
        </Header>
    )

}
