import React from 'react';

const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const postObject = {
            title, price, description
        };

        axios.patch('http://localhost:8000/api/products', postObject)
            .then(res => {
                console.log(res.data); //didnt do .data and it worked. why?
            })
            .catch(serverErr => {
                console.log("❌❌❌❌", serverErr);
            });
    };

    return (

        <form>
            <h1>Product Manager</h1>
            <label>Title: </label>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <br /> <br />
            <label>Price: </label>
            <input type="number" onChange={e => setPrice(e.target.value)} />
            <br /> <br />
            <label>Description: </label>
            <input type="text" onChange={e => setDescription(e.target.value)} />
            <br /><br />
            <button onClick={submitHandler}>Create</button>
        </form>
    );
};
export default Update;