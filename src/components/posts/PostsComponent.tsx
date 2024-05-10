import React, {FC, useEffect, useState} from 'react';
import PostComponent from "../post/PostComponent";
import {getAllPostOfSingleUser} from "../../services/api.services";
import {IPostModel} from "../../models/basic-models/IPostModel";



interface IProps{
    userId:number;
}
const PostsComponent:FC<IProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPostModel[]>([])


    useEffect(() => {
        getAllPostOfSingleUser(userId).then(({data:{posts}}) => setPosts(posts))
    }, [userId]);


    return (
        <div>
            {
posts.map((post,index)=><PostComponent key={index} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;