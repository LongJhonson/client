import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";

import "./layoutscss/LayoutBasic.scss";
import routes from "../config/routes";

export default function LayoutBasic(props) {

    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Row>
            <Col md={4} />
            <Col md={16} >
                <p>Menu Top</p>
                <LoadRoutes routes={routes} />
                <Footer>Mikel Alonso</Footer>
            </Col>
            <Col md={4} />
        </Row>
    )

    // return (
    //     <Layout>
    //         <h2>Menu sider Basic User</h2>
    //         <Layout>
    //             <Content>
    //                 <LoadRoutes routes={routes} />
    //             </Content>
    //             <Footer>Mikel Alonso</Footer>
    //         </Layout>
    //     </Layout >
    // )
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
