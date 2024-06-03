import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../../models/AuthDataModel";
import {authService} from "../../services/api.services";


interface IFormProps{
    username:string,
    password:string
}
const FormComponent:FC = () => {
let {handleSubmit,register}
    =useForm<AuthDataModel>({defaultValues:{username:'userSZ1',password:'P@$$word1'}})

    const [isAuthState, setIsAuthState]=useState<boolean>(false)

    const  authenticate = async (formData:AuthDataModel) =>{
    const isAuth = await authService.authentication(formData);
    setIsAuthState(isAuth);
    }

    return (
        <div>
            <div>
                {
                isAuthState ? <span> ok </span> : <span> not ok</span>
                }
            </div>


            <form onSubmit={handleSubmit(
                authenticate
            )}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>send</button>
            </form>
            </div>
    );
};

export default FormComponent;