import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Email Address: </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
    </form>

    <h1>My Form Data</h1>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
    <p>Confirm Password: {confirmPassword}</p>
    </>
  );
};

export default UserForm;
