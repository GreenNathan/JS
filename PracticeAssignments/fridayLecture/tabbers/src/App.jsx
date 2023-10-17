import './App.css';
import { useState } from 'react';
import Person from './components/person';
import Form from './components/Form';

const App = (props) => {
  const [people, setPeople] = useState([
    {
      name: "Mario",
      color: "red",
      xp: 50,
      isHero: true
    },
    {
      name: "Luigi",
      color: "green",
      xp: 40,
      isHero: true

    },
    {
      name: "TOAD",
      color: "pink",
      xp: 400,
      isHero: false

    },
  ]);

  // changing state
  const changeState = (someObj) => {
    setPeople([...people, someObj]);
  };

  //delete
  const deletePerson = (deleteIdx) => {
    console.log("delete", deleteIdx);

    const filteredPeople = people.filter((el, i) => {
      return i !== deleteIdx;
    })
    setPeople(filteredPeople);
  };

  // update status
  const updateStatus = (updateIdx) => {
    console.log('update', updateIdx);
    //copy state
    const peopleCopy = [...people];

    peopleCopy[updateIdx].isHero =
    !peopleCopy[updateIdx].isHero

    setPeople(peopleCopy)
  };

  return (
    <div className='App'>
      <h1>Lifting State</h1>

      <Form changeState={changeState} />

      <hr />
      {
        people.map((personObj, idx) => {
          return <Person
                  key={idx} 
                  idx={idx} 
                  personObj={personObj} 
                  deletePerson={deletePerson}
                  updateStatus={updateStatus}
                  />;
        })
      }
    </div>
  );
}

export default App
