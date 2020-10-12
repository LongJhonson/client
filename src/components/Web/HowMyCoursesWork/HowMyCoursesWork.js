import React from 'react';
import { Row, Col, Card } from 'antd';
import { ClockCircleOutlined, KeyOutlined } from '@ant-design/icons';

import "./HowMyCoursesWork.scss";

function HowMyCoursesWork(props) {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>Cómo funcionan mis cursos</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de udemy,
                    activa las 24 horas del día, los 365 días del año.
                </h3>
            </Col>

            <Col lg={4} />

            <Col lg={16}>
                <Row className="row-cards">


                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleOutlined />}
                            title="Cursos y clases"
                            description="Cursos sobre desarrollo web"
                        />
                    </Col>

                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleOutlined />}
                            title="Acceso 24/7"
                            description="Accede a los cursos en cualquier momento"
                        />
                    </Col>

                    <Col md={8}>
                        <CardInfo
                            icon={<KeyOutlined />}
                            title="Aprendizaje colaborativo"
                            description="Aprende de los demás dejando tus dudas para profesores y compañeros"
                        />
                    </Col>

                </Row>


            </Col>

            <Col lg={4} />

        </Row>
    );
}

export default HowMyCoursesWork;

function CardInfo(props) {

    //TODO pasarle el icon

    const { icon, title, description } = props;
    console.log(icon);
    const { Meta } = Card;
    return (
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta
                title={title}
                description={description}
            />

        </Card>
    )
}