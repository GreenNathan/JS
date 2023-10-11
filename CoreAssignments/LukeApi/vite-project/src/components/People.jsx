import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const People = () => {

    const [people, setPeople] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(serverObj => {
                console.log(serverObj.data);
                setPeople(serverObj.data);
            })
            .catch(serverErr => {
                console.log("❌❌❌", serverErr);
                navigate('/');
            });
    }, [id]);

    return (
        <div>
            {
                people &&
                <div>
                    <h3>{people.name}</h3>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>
            }
        </div>
    );
};

export default People;