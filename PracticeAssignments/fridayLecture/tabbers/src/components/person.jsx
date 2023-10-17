import React from 'react';

const Person = (props) => {
    const {personObj, deletePerson, updateStatus, idx} = props;
    return (
        <div>
            <h3 style={{color: personObj.color}}>
                {personObj.isHero ? "⭐" : "☠️"}
                {idx} - {props.personObj.name} - <button 
                onClick={() => deletePerson
                (idx)}>Delete</button>
            </h3>
            <span>Hero or Dead: 
                <input type='checkbox' 
                checked={personObj.isHero}
                onChange={(e) => updateStatus(idx)}/> </span>
        </div>

    );
}

export default Person