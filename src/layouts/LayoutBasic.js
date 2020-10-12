import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import MenuTop from '../components/Web/MenuTop';

import "./layoutscss/LayoutBasic.scss";
import routes from "../config/routes";

export default function LayoutBasic(props) {

    const { routes } = props;
    const { Footer } = Layout;

    return (
        <>
            <Row>
                <Col md={4} />
                <Col md={16} >
                    <MenuTop />
                </Col>
                <Col md={4} />
            </Row>
            <LoadRoutes routes={routes} />
            <Footer>Mikel Alonso</Footer>
        </>
    )
}

function LoadRoutes({ routes }) {
    //const  {routes} = props; --> Es lo mismo que el parametro de entrada
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}
