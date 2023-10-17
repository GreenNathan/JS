import { useState } from 'react';

const Form = (props) => {

        // Create state vars for component
    const [name, setName] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [xp, setXp] = useState(0);
    const [isHeroCheck, setIsHeroCheck] = useState(false)

    //form submission
    const submitHandler = (e) => {
        e.preventDefault();

        const personObj = {
            name,
            color,
            xp,
            isHero: isHeroCheck
        };

        props.changeState(personObj);
    };
    return (
        <fieldset>
            <legend>Formskie</legend>
            name: {JSON.stringify(name)} <br />
            color: {JSON.stringify(color)} <br />
            xp: {JSON.stringify(xp)} <br />

            <form onSubmit={submitHandler}>
                <p>
                    name: <input onChange={e =>setName(e.target.value)} value={name} />
                </p>
                <p>
                    color: <input type='color' onChange={e =>setColor(e.target.value)} value={color} />
                </p>
                <p>
                    xp: <input type='number' onChange={e =>setXp(e.target.value)} value={xp} />
                </p>
                <p>
                    Hero ? <input type="checkbox" checked={isHeroCheck} onChange={() => setIsHeroCheck(!isHeroCheck)}/>
                </p>
                <button>Make Person</button>
            </form>
        </fieldset>
    )
    
}

export default Form