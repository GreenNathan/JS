import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Planet = () => {

    const [planet, setPlanet] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(serverObj => {
                console.log(serverObj.data);
                setPlanet(serverObj.data);
            })
            .catch(serverErr => {
                console.log("❌❌❌", serverErr);
                navigate('/');

                // i used this for the error message - if (!res.ok) {
                //     throw new Error("Planet Not Found");
                // } and then when it catches, you setError to the (err.message)


            });
    }, [id]);

    return (
        <div>
            {
                planet
                    ? <div>
                        <h3>{planet.name}</h3>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Surface Water: {planet.surface_water}</p>
                        <p>Population: {planet.population}</p>
                    </div>
                    : <p>lOADING...</p>
            }
        </div>
    );
};

export default Planet;