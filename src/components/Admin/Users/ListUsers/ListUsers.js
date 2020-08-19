import React, { useState } from 'react';
import {
    Switch,
    List,
    Avatar,
    Button,
    Icon
} from 'antd';

import NoAvatar from '../../../../assets/img/png/no-avatar.png';

import './ListUsers.scss';

export default function ListUsers(props) {
    const { usersActive, usersInactive } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true)

    return (
        <div classNAme="list-users">
            <div className="list-users__switch">
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>
            {viewUsersActives ? <UsersActive/> : <UsersInactive/>}
        </div>
    );
}

function UsersActive(){
    return <h3>Lista de usuarios activos</h3>
}

function UsersInactive(){
    return <h3>Lista de usuarios inactivos</h3>
}