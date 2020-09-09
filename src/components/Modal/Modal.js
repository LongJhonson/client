import React from 'react';
import { Modal as ModalAntd } from 'antd';

export default function Modal(props) {
    const { children, title, isVisible, setIsVisible, user } = props;

    return(
        <ModalAntd 
        title ={title}
        centered
        visible = {isVisible}
        onCancel = {()=>setIsVisible(false)}
        footer={false}
        >
            {children}
        </ModalAntd>
    )
}