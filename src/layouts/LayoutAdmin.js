import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./layoutscss/LayoutAdmin.scss";
import routes from "../config/routes";

export default function LayoutAdmin(props) {

    const { routes } = props;

    // console.log(routes);

    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu Sider</h2>
            <Layout>
                <Header>
                    <h2>Header</h2>
                </Header>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    Mikel Alonso Alejandro
                </Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }) {
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

