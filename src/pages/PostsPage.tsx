import React, { useEffect, useState } from 'react';
import PostsComponent from "../components/posts/PostsComponent";
import { Outlet, useParams } from "react-router-dom";
import { IPostModel } from "../models/IPostModel";
import { apiServices } from "../services/api.services";

const PostsPage = () => {
    const { id } = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            apiServices.getPostsOfUser(id).then((value) => setPosts(value.data));
        } else {
            apiServices.getAllPosts().then(value => setPosts(value.data));
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts} />
            <Outlet />
        </div>
    );
};

export default PostsPage;