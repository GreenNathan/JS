import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = (props) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    // const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const postObject = {
            title, price, description
        };

        axios.post('http://localhost:8000/api/products', postObject)
            .then(res => {
                console.log(res.data);
                setTitle("");
                setPrice(0);
                setDescription("");
                navigate('/');
            })
            .catch(serverErr => {
                console.log("❌❌❌❌", serverErr);

                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message);
                // }
                // Set Errors

                // setErrors(errorArr);
            });
    };
    return (

        <form>
            <h1>Product Manager</h1>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <label>Title: </label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <br /> <br />
            <label>Price: </label>
            <input type="number" onChange={e => setPrice(e.target.value)} value={price} />
            <br /> <br />
            <label>Description: </label>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
            <br /><br />
            <button onClick={submitHandler}>Create</button>
            <hr />
        </form>
    );
};

export default Create;