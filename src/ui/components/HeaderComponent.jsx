import React from 'react';
import { Layout, Typography } from 'antd';
import { headerStyle, textStyle } from '../css/styles';

export const HeaderComponent = ({projectName}) => {
    const { Header } = Layout;
    const { Text } = Typography;

    return (
        <Header style={headerStyle}>
            <Text style={textStyle}>
                {projectName}
            </Text>
        </Header>
    )

}
