import React, { useState, useEffect } from 'react';
import { getAccessToken } from '../../../api/auth';
import { getUsersActiveApi } from '../../../api/user';
import ListUsers from '../../../components/Admin/Users/ListUsers'
import "./Users.scss";

export default function Users() {

    const [usersActive, setUsersActive] = useState([]);
    const [usersInactive, setUsersInactive] = useState([]);
    const token = getAccessToken();

    useEffect(() => {
        getUsersActiveApi(token, true).then(response => {
            setUsersActive(response);
        });

        getUsersActiveApi(token, false).then(response => {
            setUsersInactive(response);
        });

    }, [token])


    return (
        <div className="users">
            <ListUsers 
            usersActive={usersActive}
            usersInactive={usersInactive} />
        </div>
    )
}