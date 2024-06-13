import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import HomePage from "../pages/HomePage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";


const routes = [
    {
        path:'', element:<MainLayout/>,
        children:[
            {path:'/', element:<HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'userPosts', element:<UserPostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'postComments', element:<PostCommentsPage/>}
        ]
    }
]
 export const router = createBrowserRouter(routes);