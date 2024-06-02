import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../../models/AuthDataModel";


interface IFormProps{
    username:string,
    password:string
}
const FormComponent:FC = () => {
let {handleSubmit,register}
    =useForm<AuthDataModel>({defaultValues:{username:'userSZ1',password:'P@$$word1'}})

    const  authenticate = async (formData:AuthDataModel) =>{
    // const isAuth = await authService.authentication(formData);
    }

    return (
        <div>
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