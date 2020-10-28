import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import {
    BookOutlined,
    CodeOutlined,
    RightSquareOutlined,
    DatabaseOutlined,
    HddOutlined,
    AppstoreOutlined,
    UserOutlined
} from '@ant-design/icons'

import './NavigationFooter.scss';

function NavigationFooter(props) {
    return (
        <Row className="navigation-footer">
            <Col md={24}>
                <h3>Navegación</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft />
            </Col>
            <Col md={12}>
                <RenderListRight />
            </Col>
        </Row>
    );
}

export default NavigationFooter;

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href="#">
                    <HddOutlined />
                Sistemas / Servidores
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <AppstoreOutlined />
                    CMS
                </Link>
            </li>
            <li>
                <a href="#">
                    <DatabaseOutlined />
                Base de datos
                </a>
            </li>
            <li>
                <a href="#">
                    <RightSquareOutlined />
                Politica de Privacidad
                </a>
            </li>
        </ul>
    )
}

function RenderListRight() {
    return (
        <ul>
            <li>
                <a href="#">
                    <BookOutlined />
                Cursos
                </a>
            </li>
            <li>
                <Link to="/contact">
                    <CodeOutlined />
                    Desarrollo web
                </Link>
            </li>
            <li>
                <a href="#">
                    <UserOutlined />
                Portfolio
                </a>
            </li>
            <li>
                <a href="#">
                    <RightSquareOutlined />
                Politica de Cookies
                </a>
            </li>
        </ul>
    )
}