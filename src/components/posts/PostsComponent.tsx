import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {apiServices} from "../../services/api.services";

const PostsComponent:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        apiServices.getAllPosts().then((value) => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post=> <div>{post.title} : {post.body}
                <hr/>
            </div>)}
        </div>
    );
};

export default PostsComponent;