import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import reactJsHooks from "../../../assets/img/jpg/Recursos/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/Recursos/react-native.jpg";
import javascript from "../../../assets/img/jpg/Recursos/javascript-es6.jpg";
import wordpress from "../../../assets/img/jpg/Recursos/wordpress.jpg";
import prestashop from "../../../assets/img/jpg/Recursos/prestashop-1-7.jpg";
import css from "../../../assets/img/jpg/Recursos/css-grid.jpg";

import "./HomeCourses.scss";
import { List } from 'antd/lib/form/Form';


function HomeCourses(props) {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />

            <Col lg={16}>
                <Row className="row-courses">

                    <Col md={6}>
                        <CardCourse
                            image={reactJsHooks}
                            title="React JS Hooks"
                            subtitle="Inermedio - React/Javascript"
                            link="#"
                        />
                    </Col>

                    <Col md={6}>
                        <CardCourse
                            image={reactNative}
                            title="React Native"
                            subtitle="Inermedio - React/Javascript"
                            link="#"
                        />
                    </Col>


                    <Col md={6}>
                        <CardCourse
                            image={javascript}
                            title="Javascript"
                            subtitle="Inermedio - React/Javascript"
                            link="#"
                        />
                    </Col>


                    <Col md={6}>
                        <CardCourse
                            image={wordpress}
                            title="Wordpress"
                            subtitle="Inermedio - React/Javascript"
                            link="#"
                        />
                    </Col>

                </Row>
                <Row className="row-courses">
                    <Col md={6}>
                        <CardCourse
                            image={prestashop}
                            title="Prestashop"
                            subtitle="Basico - Prestashop"
                            link="#"
                        />
                    </Col>

                    <Col md={12} />

                    <Col md={6}>
                        <CardCourse
                            image={css}
                            title="CSS Grid"
                            subtitle="Inermedio - React/Javascript"
                            link="#"
                        />
                    </Col>


                </Row>
            </Col>

            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/Courses">
                    <Button>
                        Ver más
                    </Button>
                </Link>
            </Col>
        </Row>
    );
}

export default HomeCourses;

function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={props} target="_blank">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>

        </a>
    )
}