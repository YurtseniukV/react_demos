import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./components/users/UsersComponent";
import {getAllPostOfSingleUser} from "./services/api.services";
import {IPostModel} from "./models/basic-models/IPostModel";
import PostsComponent from "./components/posts/PostsComponent";

const App = () => {
    const [userId, setUserId] = useState<number>(0)
    const getAllPostOfSingleUser = (id:number) =>{
setUserId(id)
    }


  return (
    <div className='App'>

      <UsersComponent getAllPostOfSingleUser={getAllPostOfSingleUser}/>
        {
         !!userId &&   <PostsComponent userId={userId}/>
        }
    </div>
  );
}

export default App;
