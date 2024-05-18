import React from 'react';
import {NavLink} from "react-router-dom";

import classes from "./header.module.css";
const HeaderComponent = () => {
    return (
        <div className={classes.navBar}>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="posts">Posts</NavLink>
            <NavLink to="comments">Comments</NavLink>
        </div>
    );
};

export default HeaderComponent;