import React from 'react';
import { Layout, Row, Col } from 'antd'

import MyInfo from './MyInfo';
import NavigationFooter from './NavigationFooter';
import Newsletter from '../Newsletter';

import './Footer.scss';

function Footer(props) {
    const { Footer } = Layout;
    return (
        <Footer className="footer">
            <Row className="">
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}>
                            <MyInfo />
                        </Col>
                        <Col md={8}>
                            <NavigationFooter />
                        </Col>
                        <Col md={8}>
                            <Newsletter /> 
                        </Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>Todos los derechos reservados</Col>
                        <Col md={12}>Mikel Alonso Alejandro | Desarrollador web</Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    );
}

export default Footer;