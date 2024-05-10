import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/basic-models/IUserModel";
import {getAllUsers} from "../../services/api.services";
import UserComponent from "../user/UserComponent";
import {IPostModel} from "../../models/basic-models/IPostModel";


interface IProps{
    getAllPostOfSingleUser:(id:number) => void;
}

const UsersComponent:FC<IProps>= ({getAllPostOfSingleUser}) => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(()=>{
        getAllUsers().then(({data:{users}}) => setUsers(users))
    },[]);


    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} user={user} getAllPostOfSingleUser={getAllPostOfSingleUser}/>))
            }
        </div>
    );
};

export default UsersComponent;