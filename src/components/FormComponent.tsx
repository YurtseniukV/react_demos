import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";
import {postServise} from "../services/api.services";

interface IFormProps{
    userId: number,
    title: string,
    body: string
}
const FormComponent:FC = () => {

let {register,handleSubmit,formState:{errors,isValid} }
    = useForm<IFormProps>({mode:"all",resolver:joiResolver(postValidator)
})


    const [post, setPost] = useState<IPostModel>()

let send = (post:IFormProps) =>{
postServise
    .sendPost(post)
    .then(value => setPost(value.data))

}


    return (
        <div>
<form onSubmit={handleSubmit(send)}>
    <input type="number" {...register('userId')}/>
    {errors.userId && <span> {errors.userId.message}</span>}
    <input type="text" {...register('title')}/>
    {errors.title && <span> {errors.title.message}</span>}
    <input type="text" {...register('body')}/>
    {errors.body && <span> {errors.body.message}</span>}

    <button>Send</button>
</form>

            {post && <h2>{post.userId} ) {post.title} : {post.body}</h2>}
        </div>
    );
};

export default FormComponent;