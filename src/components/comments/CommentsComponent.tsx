import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import {apiServices} from "../../services/api.services";


const CommentsComponent:FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])


    useEffect(() => {
        apiServices.getAllComments().then(value =>setComments(value.data))
    }, []);
    return (
        <div>
            {comments.map(comment => <div>{comment.id} - {comment.name}</div>)}
        </div>
    );
};

export default CommentsComponent;