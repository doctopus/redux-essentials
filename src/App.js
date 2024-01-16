import React from 'react';
import './App.css';

import {useSelector} from "react-redux";
import {Table} from "antd";
import {getUsers, getUsersLoading} from "./app/selectors/base.selectors";


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

function App() {
  const users = useSelector(getUsers);
  const isUsersLoading = useSelector(getUsersLoading);

  return (
    <div className="App">
        <Table dataSource={users} columns={columnDef} loading={isUsersLoading} />
    </div>
  );
}

export default App;
