import React, {FC} from 'react';
import {IPostModel} from "../../models/basic-models/IPostModel";


interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    console.log()
    return (
        <div>
            <div>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>


        </div>
    );
};

export default PostComponent;