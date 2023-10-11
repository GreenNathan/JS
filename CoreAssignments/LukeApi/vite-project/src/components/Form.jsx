import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [starId, setStarId] = useState(1);
    const [select, setSelect] = useState("people");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
        navigate("/" + select + "/" + starId);
    };

    return (
        <fieldset>
            <legend>Form</legend>

            <form onSubmit={submitHandler}>
                <label htmlFor='search'>Search for: </label>
                <select id='search' onChange={e => setSelect(e.target.value)}>
                    <option value={"people"}>People</option>
                    <option value={"planets"}>Planets</option>
                </select>
                <input type="number" onChange={e => setStarId(e.target.value)} value={starId} />
                <button>Get Me</button>
            </form>
        </fieldset>
    );
};

export default Form;