import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {commentService, postService, userService} from "../services/api.services";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {Context} from "../contex/ContexProvider";
import {ICommentModel} from "../models/ICommentModel";

const MainLayout = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
        commentService.getComments().then(value=>setComments(value.data))
    }, []);



    return (
        <div>
<HeaderComponent/>
            <Context.Provider value={{
                userStore:{
                    allUsers:users,
                },
                postStore:{
                    allPosts:posts,
                },
                commentStore:{
                    allComments:comments,
                }
            }}>
                <Outlet/>
            </Context.Provider>

        </div>
    );
};

export default MainLayout;