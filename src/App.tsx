import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./Components/UsersComponent";
import PostsComponent from "./Components/PostsComponent";
import {getAllPostsOfSingleUser} from "./Services/Api.services";
import {IPostModel} from "./Models/IPostModel";

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
