import React, {FC} from 'react';

import {IPostModel} from "../Models/IPostModel";
import PostComponent from "./PostComponent";

import classes from "./posts.module.css";

interface IProps{
    posts:IPostModel[]
}

const PostsComponent:FC<IProps> = ({posts}) => {

    return (
        <div className={classes.posts}>
            {posts.map((post) => (<PostComponent key={post.id} post={post}/>))}
        </div>
    );
};

export default PostsComponent;