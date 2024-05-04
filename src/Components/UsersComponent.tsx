import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../Models/IUserModel";
import {getAllUsers} from "../Services/Api.services";
import UserComponent from "./UserComponent";

interface IProps{
    users:IUserModel[]
}

type IPropsType=IProps & {children?:React.ReactNode};

const UsersComponent:FC<IPropsType> = ({users}) => {

    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id}/>))}
        </div>
    );
};

export default UsersComponent;