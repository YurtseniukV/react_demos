import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user:IUserModel
}

type IPropsType = IProps & {children?:React.ReactNode} & {lift:(userId:number)=>void};

const UserComponent:FC<IPropsType> = ({user,lift}) => {

    const onClickHandler=()=>{
            lift(user.id);
    };

    return (
        <div>
            {user.id} ) {user.name} {user.username} - {user.email} / phone: {user.phone}, mail: {user.website}

            <div>
                <button onClick={onClickHandler}>Show post</button>
            </div>
            <hr/>
        </div>
    );
};

export default UserComponent;