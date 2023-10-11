import React from 'react';

const PersonCard = (props) => {
    const {name, age, hairColor} = props
    return (
        <div>
            <h1 style={{ color: "red" }}> {name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;