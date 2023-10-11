import React, { useState } from 'react';
const BirthdayButton = (props) => {
    const { onBirthdayClick } = props;
    return (
        <div>
            <button onClick= {onBirthdayClick}>Push Me</button>
        </div>
    );
}


export default BirthdayButton;