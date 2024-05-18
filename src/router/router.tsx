import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UsersComponent from "../components/users/UsersComponent";
import HomePage from "../pages/HomePage";
import PostsComponent from "../components/posts/PostsComponent";
import CommentsComponent from "../components/comments/CommentsComponent";

export const routerConfig= createBrowserRouter(
    [{path:'/',
           element: <MainLayout/>,
    children:[
        {index:true, element:<HomePage/>},
        {path:'users',element:<UsersComponent/>},
        {path:'posts',element:<PostsComponent/>},
        {path:'comments',element:<CommentsComponent/>}
    ]
    }]
)
