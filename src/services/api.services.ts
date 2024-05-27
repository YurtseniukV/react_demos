import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {ICommentModel} from "../models/ICommentModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

let apiServices={

    getAllUsers:():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users')
    },

    getPostsOfUser:(userId:string):Promise<AxiosResponse<IPostModel[]>> => {
      return axiosInstance.get(`/users/${userId}/posts`)
    },

    getAllPosts:():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('/posts')
    },

    getAllComments:():Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get('/comments')
    },

    getCommentOfPost:(postId:string):Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(`/posts/${postId}/comments`)
}
}


export {
   apiServices
}