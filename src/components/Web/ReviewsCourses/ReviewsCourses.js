import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import AvatarPersona1 from '../../../assets/img/png/no-avatar.png'
import AvatarPersona2 from '../../../assets/img/png/no-avatar.png'
import AvatarPersona3 from '../../../assets/img/png/no-avatar.png'

import "./ReviewsCourses.scss";

function ReviewsCourses(props) {
    return (
        <Row className="reviews-courses">
            {/* <Row> */}
            <Col lg={4} />

            <Col lg={16} className="reviews-courses__title">
                <h2>Forma parte de mas de los 35000 estudiantes que estan aprendiendo con mis cursos</h2>
            </Col>

            <Col lg={4} />
            {/* </Row> */}

            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col lg={8}>
                            <CardReview
                                name="Mikel"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona1}
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </Col>

                        <Col lg={8}>
                            <CardReview
                                name="Mikel"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona1}
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </Col>

                        <Col lg={8}>
                            <CardReview
                                name="Mikel"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona1}
                                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            />
                        </Col>

                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    );
}

export default ReviewsCourses;

function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    )
}