import React from 'react';
import PropTypes from 'prop-types';
import { useModalNames } from '../hooks/useModalNames';
import { Button, Form, Input, Modal, Typography } from 'antd';

export const ModalNames = ({
    names,
    reassignNames,
    setNames,
    setReassignNames,
    open,
    transcription,
    speakersCount,
    setTranscription,
    setModal,
    whoIsText,
    finishText,
    nextText
}) => {
    const [form] = Form.useForm();

    const {
        index,
        speakerCurrent,
        phraseCurrent,
        nextPhrase,
    } = useModalNames({ names, reassignNames, setNames, setReassignNames, speakersCount, transcription, setTranscription, setModal, form });

    const { Text, Title } = Typography;


    return (
        <Modal
            open={open}
            footer={null}
            onCancel={() => setModal(false)}
        >
            <p>{speakerCurrent}</p>
            <Form form={form} onFinish={nextPhrase}>
                <Title>{whoIsText}</Title>
                <Text>{phraseCurrent}</Text>

                <Form.Item className='my-1' name="nameSpeaker">
                    <Input />
                </Form.Item>

                <Form.Item className='flex justify-end'>
                    <Button type="primary" htmlType="submit">
                        {index < speakersCount - 1 ? nextText : finishText}
                    </Button>
                </Form.Item>

            </Form>

        </Modal>
    )
}

ModalNames.propTypes = {
    names: PropTypes.array.isRequired,
    reassignNames: PropTypes.array.isRequired,
    setNames: PropTypes.func.isRequired,
    setReassignNames: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    transcription: PropTypes.string.isRequired,
    speakersCount: PropTypes.number.isRequired,
    setTranscription: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired,
    whoIsText: PropTypes.string.isRequired,
    finishText: PropTypes.string.isRequired,
    nextText: PropTypes.string.isRequired
}
