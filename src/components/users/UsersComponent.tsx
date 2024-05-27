import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {apiServices} from "../../services/api.services";
import UserComponent from "../user/UserComponent";

import classes from "./users.module.css";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        apiServices.getAllUsers().then(value =>setUsers(value.data))
    }, []);

    return (
        <div className={classes.content}>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;