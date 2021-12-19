import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../../helpers/Wrapper';
const AddUser = (props) =>
{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('nameInputRef:', nameInputRef.current.value, ' ageInputRef', ageInputRef.current.value);
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;

        if (name.trim().length <= 1 ) {
            setError({title:'invalid input', message:'Please add user name'});
            return;
        }
        else if (age.trim().length <= 1 || +age <= 0) {
            setError({title:'invalid age', message:'Age is missing or not numeric'});
            return;
        }
        
        console.log(`we do not have an error`);
        props.onAddUser(name, age);
        setError();
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    };

    const errorHandler = () => {
        setError(null);
    }

    return (<>
        <Wrapper>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"ref={nameInputRef}/>
                <label htmlFor="age">Age</label>
                <input id="Age (Years)" type="number" ref={ageInputRef}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        </Wrapper>
        </>
    );
}
export default AddUser;