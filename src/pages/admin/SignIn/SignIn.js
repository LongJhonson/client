import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo2.png";
import RegisterForm from "../../../components/Admin/RegisterForm";

import "./SignIn.scss";

export default function SignIn() {

    const { Content } = Layout;
    const { TabPane } = Tabs;

    return (
        <Layout className="signIn">
            <Content className="signIn__content">
                <h1 className="signIn__content-logo">
                    <img src={Logo} alt="Mikel Alonso" />
                </h1>
                <div className="signIn__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            Componente loginform
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}