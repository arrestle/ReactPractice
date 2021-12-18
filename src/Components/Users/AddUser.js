import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) =>
{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        setIsValid(true);
        if (enteredUsername.trim().length <= 1 ) {
            setIsValid(false);
            setError({title:'invalid input', message:'Please add user name'})
        }
        else if (enteredAge.trim().length <= 1 || +enteredAge <= 0) {
            setIsValid(false);
            setError({title:'invalid age', message:'Age is missing or not numeric'})
        }
        if (isValid) {
           props.onAddUser(enteredUsername, enteredAge);
           setEnteredUsername('');
           setEnteredAge('');
        }
        else {
            console.log(`ErrorModal ${error} is not valid`);
        }
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value ={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="Age (Years)" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        </div>
    );
}
export default AddUser;