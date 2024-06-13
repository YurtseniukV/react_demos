import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../contex/ContexProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";
import {PostWithCommentsType} from "../models/PostWithCommentsModel";

const PostCommentsComponent = () => {
    const {commentStore:{allComments},postStore:{allPosts}} = useContextProvider();
    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
            });
        }
    }, [allPosts, allComments]);


    useEffect(() => {
        setPostWithCommentsState(postWithCommentsArray);
    }, [postWithCommentsArray]);
    return (
        <div>

        </div>
    );
};

export default PostCommentsComponent;