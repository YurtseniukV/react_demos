import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/basic-models/IUserModel";
import {UsersResponseModel} from "../models/response-models/UsersResponseModel";
import {PostsResponseModel} from "../models/response-models/PostsResponseModel";


let axiosInstanse = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstanse.get('/users');
}

const getAllPostOfSingleUser = (userId:number):Promise<AxiosResponse<PostsResponseModel>> =>{
    return axiosInstanse('/users/' + userId + '/posts')
}



export {
    getAllUsers,
    getAllPostOfSingleUser
}