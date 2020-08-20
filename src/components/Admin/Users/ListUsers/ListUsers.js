import React, { useState } from 'react';
import { EditOutlined, StopOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import {
    Switch,
    List,
    Avatar,
    Button
} from 'antd';

import NoAvatar from '../../../../assets/img/png/no-avatar.png';

import './ListUsers.scss';

export default function ListUsers(props) {
    const { usersActive, usersInactive } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true)

    return (
        <div className="list-users">
            <div className="list-users__switch">
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span classname="switchText">
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>
            {viewUsersActives ? <UsersActive usersActive={usersActive} /> : <UsersInactive usersInactive={usersInactive} />}
        </div>
    );
}

function UsersActive(props) {
    const { usersActive } = props;
    return (
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => { console.log("Editar usuario") }}
                        >
                            <EditOutlined />
                        </Button>,

                        <Button
                            type="danger"
                            onClick={() => { console.log("Desactivar usuario") }}
                        >
                            <StopOutlined />
                        </Button>,

                        <Button
                            type="danger"
                            onClick={() => { console.log("Eliminar usuario") }}
                        >
                            <DeleteOutlined />
                        </Button>


                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                    ${user.name ? user.name : '...'}
                    ${user.lastname ? user.lastname : '...'}
                    `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}

function UsersInactive(props) {
    const { usersInactive } = props;
    return (
        <List
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button
                            type="primary"
                            onClick={() => { console.log("Activar usuario") }}
                        >
                            <CheckCircleOutlined />
                        </Button>,                       

                        <Button
                            type="danger"
                            onClick={() => { console.log("Eliminar usuario") }}
                        >
                            <DeleteOutlined />
                        </Button>


                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                    ${user.name ? user.name : '...'}
                    ${user.lastname ? user.lastname : '...'}
                    `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    )
}