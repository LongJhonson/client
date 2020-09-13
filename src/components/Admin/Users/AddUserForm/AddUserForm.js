import React, { useState } from 'react';
import {
    Form,
    Icon,
    Input,
    Select,
    Button,
    Row,
    Col,
    Option,
    notification
} from 'antd';

import { signUpAdminApi } from '../../../../api/user';
import { getAccessToken } from '../../../../api/auth';

import './AddUserForm.scss';

export default function AddUserForm(props) {
    const { setIsVisibleModal, setReloadUsers } = props;

    const [userData, setUserData] = useState({});

    const addUser = (event) => {
        event.preventDefault();
        if (
            !userData.name ||
            !userData.lastname ||
            !userData.role ||
            !userData.email ||
            !userData.password ||
            !userData.repeatPassword
        ) {
            notification["error"]({
                message: "Todos los campos son obligatorios"
            });
        } else if (userData.password != userData.repeatPassword) {
            notification["error"]({
                message: "Las contraseñas tienen que ser iguales"
            });
        } else {           
            const accesToken = getAccessToken();
            signUpAdminApi(accesToken, userData).then(response => {
                notification["success"]({
                    message: response
                });
                setIsVisibleModal(false);
                setReloadUsers(true);
                setUserData({});
            }).catch(err => {
                notification["error"]({
                    message: err
                });
            })
        }
    }

    return (
        <div className="add-user-form">
            <AddForm
                userData={userData}
                setUserData={setUserData}
                addUser={addUser}
            />
        </div>
    )
}

function AddForm(props) {
    const { userData, setUserData, addUser } = props;
    const { option } = Select;

    return (
        <Form className="form-add" onSubmitCapture={addUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            // prefix="icono"
                            placeholder="Nombre"
                            value={userData.name}
                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            // prefix="icono"
                            placeholder="Apellidos"
                            value={userData.lastname}
                            onChange={e => setUserData({ ...userData, lastname: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            // prefix="icono"
                            placeholder="email"
                            value={userData.email}
                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Selecciona un rol"
                            onChange={e => setUserData({ ...userData, role: e })}
                            value={userData.role}
                        >
                            <option value="admin">Administrador</option>
                            <option value="editor">Editor</option>
                            <option value="reviewer">Revisor</option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password"
                            // prefix="icono"
                            placeholder="Contraseña"
                            value={userData.password}
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password"
                            // prefix="icono"
                            placeholder="Repetir contraseña"
                            value={userData.repeatPassword}
                            onChange={e => setUserData({ ...userData, repeatPassword: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Crear usuario
                </Button>
            </Form.Item>
        </Form>
    )
}