import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Update = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.patch("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const postObject = {
            title, price, description
        };

        axios.patch('http://localhost:8000/api/products/' + id, postObject)
            .then(res => {
                console.log(res.data);
                navigate('/products');
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
            <label>Title: </label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <br /> <br />
            <label>Price: </label>
            <input type="number" onChange={e => setPrice(e.target.value)} value={price} />
            <br /> <br />
            <label>Description: </label>
            <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
            <br /><br />
            <button onClick={submitHandler}>Update!!</button>
        </form>
    );
};
export default Update;