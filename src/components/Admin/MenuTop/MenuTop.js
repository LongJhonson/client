import React from "react";
import { Link } from "react-router-dom";
import MikelLogo from "../../../assets/img/png/logo2.png";

import "./MenuTop.scss";
import { Button } from "antd";
import { MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/admin"}>
                    <img
                        className="menu-top__left-logo"
                        src={MikelLogo}
                        alt="Mikel Alonso"
                    />
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <MenuUnfoldOutlined type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
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