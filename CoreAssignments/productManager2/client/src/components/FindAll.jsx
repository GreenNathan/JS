import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindAll = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {
                productList.map(oneProductList => {
                    return (
                        <div key={oneProductList._id}>
                            <Link to={'/products/' + oneProductList._id}>
                                <h3>{oneProductList.title}</h3>
                            </Link>
                            <h2>{oneProductList.price}</h2>
                            <h2>{oneProductList.description}</h2>
                            <hr />
                        </div>
                    );
                })
            }
            <p>Title: </p>
            <p>Price: </p>
            <p>Description: </p>
        </div>
    );
};

export default FindAll;