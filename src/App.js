import React from 'react';
import './App.css';

import {useSelector} from "react-redux";
import {Table} from "antd";
import {getUsers, getUsersLoading} from "./app/selectors/base.selectors";
import { getPosts } from "./app/selectors/posts.selector";
import {getTodos} from "./app/selectors/todos.selectors";

const columnDef = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
]
const postColumnDef = [
    {
        title: 'Post Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Post Body',
        dataIndex: 'body',
        key: 'body',
    }
]
function App() {
  const users = useSelector(getUsers);
  const isUsersLoading = useSelector(getUsersLoading);
  const todos = useSelector(getTodos);
  const posts = useSelector(getPosts);

  return (
    <div className="App">
        <Table dataSource={users} columns={columnDef} loading={isUsersLoading} />
        <div className="Posts" style={{border: 'green'}}>
            <Table dataSource={posts} column={postColumnDef} />
            <div className="todos" style={{border: 'red'}}>
                {todos.stringify}
                </div>
        </div>
    </div>
  );
}

export default App;
