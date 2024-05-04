import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../Models/IPostModel";

let axiosInstanse = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    headers: {'content-type': 'application/json; charset=UTF-8'}
});


const getAllUsers = (): Promise<AxiosResponse<IUserModel[]>> =>{
return axiosInstanse.get('/users')
}


const getAllPostsOfSingleUser = ():Promise<AxiosResponse<IPostModel[]>> =>{
    return axiosInstanse.get('/posts?userId=' + id)
}


export {
getAllUsers,
getAllPostsOfSingleUser
}