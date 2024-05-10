import React, {FC} from 'react';
import {IUserModel} from "../../models/basic-models/IUserModel";
import {IPostModel} from "../../models/basic-models/IPostModel";

import classes from "./User.module.css";
import {getAllPostOfSingleUser} from "../../services/api.services";

type IProps ={user:IUserModel,
    getAllPostOfSingleUser:(id:number) =>void
}
const UserComponent:FC<IProps>  = ({user,getAllPostOfSingleUser}) => {

const onClickHandler=()=>{
    getAllPostOfSingleUser(user.id)
}

    return (
        <div>
            {user.id}) {user.firstName} {user.lastName} : birth date - {user.birthDate} ({user.age} years) / gender : {user.gender} .
            <img className={classes.img} src={user.image}/>
            <button onClick={onClickHandler}>show me all posts of this user</button>
        </div>
    );
};

export default UserComponent;