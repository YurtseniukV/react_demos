import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {Link} from "react-router-dom";


interface IProps{
    post:IPostModel
}
const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>

            {post.id} )  {post.title} : {post.body}. <Link to={post.id.toString()}>More...
        </Link>
            <hr/>
        </div>
    );
};

export default PostComponent;