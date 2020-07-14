import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import "./LoginForm.scss";

export default function LoginForm() {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const login = async e => {
        e.preventDefault();
        const result = await signInApi(inputs);
        console.log(result);

        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            const { accessToken, refresh } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refresh);
            notification["success"]({
                message: "Login correcto"
            });
            // window.location.href = "/admin";
        }
    }

    return (
        <Form className="login-form" onSubmitCapture={login} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<MailOutlined style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="login-form__input"
                    // onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0, 0, 0, .25)" }} />}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="login-form__input"
                    // onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    className="register-form__button"
                >
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}