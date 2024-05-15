import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

const axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
})


// axiosInstance.interceptors.request.use(request => {      |
//     console.log(request);
//     request.headers.set({xxx: 'foobar'});
//     return request;
// });



const postServise= {
    getAllPosts : ():Promise<AxiosResponse<IPostModel>> =>{
        return axiosInstanse.get('/posts')
    },

     sendPost : (data:any) =>{

return fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        data
    })
}).then(value => value.json())

    }
}


// sendPost: async (data: any): Promise<any> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ data })
//     });
//     return await response.json();



export {
    postServise
}
