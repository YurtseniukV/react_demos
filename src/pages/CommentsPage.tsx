import React, { useEffect, useState } from 'react';
import CommentsComponent from "../components/comments/CommentsComponent";
import { useParams } from "react-router-dom";
import { ICommentModel } from "../models/ICommentModel";
import { apiServices } from "../services/api.services";

const CommentsPage = () => {
    const { postId } = useParams();

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (postId) {
            apiServices.getCommentOfPost(postId).then(value => setComments(value.data));
        } else {
            apiServices.getAllComments().then(value => setComments(value.data));
        }
    }, [postId]);

    return (
        <div>
            <CommentsComponent comments={comments} />
        </div>
    );
};

export default CommentsPage;