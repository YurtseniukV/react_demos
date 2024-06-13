import React from 'react';
import {useContextProvider} from "../contex/ContexProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {

    const {commentStore:{allComments}} = useContextProvider();

    return (
        <div>
            {
                allComments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;