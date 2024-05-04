import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../Models/IUserModel";
import {getAllUsers} from "../Services/Api.services";
import UserComponent from "./UserComponent";

import classes from "./Users.module.css";

// interface IProps{
//     users:IUserModel[]
// }
//
// type IPropsType=IProps & {children?:React.ReactNode};


type IPropsType = {lift:(userId:number)=>void}


const UsersComponent:FC<IPropsType>= ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(()=>{
        getAllUsers().then(({data}) => setUsers(data))
    },[])
    
    return (
        <div className={classes.users}>
            {users.map((user) => (<UserComponent key={user.id} user = {user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;