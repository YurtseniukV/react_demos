import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./сomponents/users/UsersComponent";
import PostsComponent from "./сomponents/posts/PostsComponent";
import {getAllPostsOfSingleUser} from "./services/Api.services";
import {IPostModel} from "./models/IPostModel";

const App: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    const lift = (userId:number) =>{
       getAllPostsOfSingleUser(userId).then(({data}) => setPosts(data))
    };

  return (
    <div className="App">
<div><UsersComponent lift={lift}/></div>
        <div><PostsComponent posts={posts}/></div>
    </div>
  );
}

export default App;
