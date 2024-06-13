import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../contex/ContexProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostsComponent = () => {
    const {postStore:{allPosts},userStore:{allUsers}} = useContextProvider();
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([]);

    const userWithPostsArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            });
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArray);
    }, [userWithPostsArray]);
    return (
        <div>

        </div>
    );
};

export default UserPostsComponent;