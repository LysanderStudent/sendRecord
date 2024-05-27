import React from 'react';
import PropTypes from 'prop-types';
import { useModalNames } from '../hooks/useModalNames';
import { Button, Form, Input, Modal, Typography } from 'antd';

export const ModalNames = ({
    open,
    transcription,
    speakersCount,
    setTranscription,
    setModal
}) => {
    const {
        index,
        speakerCurrent,
        phraseCurrent,
        nextPhrase
    } = useModalNames(speakersCount, transcription, setTranscription, setModal);

    const { Text, Title } = Typography;


    return (
        <Modal open={open} footer={null}>
            <p>{speakerCurrent}</p>
            <Form onFinish={nextPhrase}>
                <Title>¿Quien dice esta frase?</Title>
                <Text>{phraseCurrent}</Text>

                <Form.Item className='my-1' name="nameSpeaker">
                    <Input />
                </Form.Item>

                <Form.Item className='flex justify-end'>
                    <Button type="primary" htmlType="submit">
                        {index < speakersCount - 1 ? 'Next' : 'Finish'}
                    </Button>
                </Form.Item>

            </Form>

        </Modal>
    )
}

ModalNames.propTypes = {
    open: PropTypes.bool.isRequired,
    transcription: PropTypes.string.isRequired,
    speakersCount: PropTypes.number.isRequired,
    setTranscription: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired
}
