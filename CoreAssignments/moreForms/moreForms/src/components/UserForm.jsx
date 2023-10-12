import React, { useState } from 'react';



const UserForm = (props) => {
    // inputs
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("")

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");



// change handlers
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError('Name must be at least 2 characters!');
        } else {
            setFirstNameError('');
        }
    }


    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError('Name must be at least 2 characters!');
        } else {
            setLastNameError('');
        }
    }


    const handleEmail = (e) => {
        setEmail(e.target.value);

        if(e.target.value.length < 2) {
            setEmailError('Email must be at least 2 characters!');
        } else {
            setEmailError('');
        }
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError('Password must be at least 8 characters!');
        } else {
            setPasswordError('');
        }
    }


    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmPasswordError('Password must match!');
        } else {
            setConfirmPasswordError('');
        }
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {
                        firstNameError ?
                        <p> {firstNameError} </p> :
                        ''
                    }
                </div>

                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {
                        lastNameError ?
                        <p> {lastNameError} </p> :
                        ''
                    }
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {
                        emailError ?
                        <p> {emailError} </p> :
                        ''
                    }
                </div>

                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={handlePassword} />
                    {
                        passwordError ?
                        <p> {passwordError} </p> :
                        ''
                    }
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={handleConfirmPassword} />
                    {
                        confirmPasswordError ?
                        <p> {confirmPasswordError} </p> :
                        ''
                    }
                </div>
                <button type='submit'>Click ME!</button>
            </form>
        </>
    );
};

export default UserForm;
