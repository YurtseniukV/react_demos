import React, {FC} from 'react';
import {IPostModel} from "../Models/IPostModel";


interface IProps{
    post:IPostModel;
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <ul>{post.title}
                <li>{post.body}</li>
            </ul>

        </div>
    );
};

export default PostComponent;