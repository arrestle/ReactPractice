import React, {useState, Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
   setUsersList(
      (prevUsersList) => {
        const key = `Key${prevUsersList.length+1}`;
        console.log(`addUserHandler username:${uName} age:${uAge} key:${key}`);
        return [...prevUsersList, {name:uName, age: uAge, key:key}]})
    };

  return (
    <>
    <Fragment>
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </React.Fragment>
    </Fragment>
    </>
  );
}

export default App;
