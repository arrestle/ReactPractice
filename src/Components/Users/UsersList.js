import React, {useState} from 'react';
import Card from '../UI/Card';
import Classes from './UsersList.module.css';

const UsersList = (props) =>
{
return (
    <Card className={Classes.users}>
    <h1>User List</h1>
    <ul>
        {props.users.map(user => 
            <li key={user.key}>{user.name} ({user.age} years old)</li>
        )}
    </ul>
    </Card>
);
}
export default UsersList;