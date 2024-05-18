import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {apiServices} from "../../services/api.services";

import classes from "./users.module.css";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        apiServices.getAllUsers().then(value =>setUsers(value.data))
    }, []);

    return (
        <div className={classes.content}>
            {users.map(user => <div key={user.id}>{user.name} {user.username} - contact email : {user.email}</div>)}
        </div>
    );
};

export default UsersComponent;