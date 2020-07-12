import React from "react";
import MikelLogo from "../../../assets/img/png/logo2.png";

import "./MenuTop.scss";
import { Button } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons';

export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left-logo"
                    src={MikelLogo}
                    alt="Mikel Alonso"
                />
                <Button type="link" onClick={() => console.log("Click")}>
                    <MenuUnfoldOutlined />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log("Cerrar sesion")}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}