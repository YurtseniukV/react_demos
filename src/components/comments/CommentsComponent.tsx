import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {apiServices} from "../../services/api.services";
import CommentComponent from "../comment/CommentComponent";

interface IProps{
    comments:ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;