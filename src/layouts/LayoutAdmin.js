import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop/MenuTop";

import "./layoutscss/LayoutAdmin.scss";
import routes from "../config/routes";

export default function LayoutAdmin(props) {

    const { routes } = props;

    // console.log(routes);

    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            {/* {TO DO: menu sider} */}
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop/>
                </Header>
                <Content className="layout-admin__content">
                    estamos en admin
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">
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

