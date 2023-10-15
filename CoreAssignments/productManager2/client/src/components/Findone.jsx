import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Findone = () => {

    const { id } = useParams();

    const [oneProduct, setOneProduct] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            {
                oneProduct &&
                <>
                    <h3> {oneProduct.title} </h3>
                    <h2>{oneProduct.price}</h2>
                    <h2>{oneProduct.description}</h2>
                    <hr />
                </>
            }
        </div>
    );
};

export default Findone;