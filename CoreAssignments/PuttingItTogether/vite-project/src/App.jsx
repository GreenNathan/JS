// courtesy of Bryan help!
import React, { useState } from 'react';
import './App.css'
// import React from 'react';
import PersonCard from './components/PersonCard';
import BirthdayButton from './components/BirthdayButton';

// const App = (props) => {
//   return (
//     <div className="App">
//       <PersonCard name={'Jane Doe'} age={41} hairColor={'green'} />
//       <PersonCard name={'Leroy Jenkins'} age={19} hairColor={'red'} />
//       <PersonCard name={'Jimmy Neutron'} age={27} hairColor={'black'} />
//       <PersonCard name={'Dee Dee'} age={30} hairColor={'white'} />
//     </div>
//   );
// }
// export default App;

function App() {

  const preButton = [
    { name: 'Jane Doe', age: 41, hairColor: 'green' },
    { name: 'Leroy Jenkins', age: 19, hairColor: 'red' },
    { name: 'Jimmy Neutron', age: 27, hairColor: 'black' },
    { name: 'Dee Dee', age: 30, hairColor: 'white' },
  ];

  const [people, setPeople] = useState(preButton);

  const handleBirthdayClick = (index) => {
    const updatedPeople = [...people];
    updatedPeople[index].age += 1;
    setPeople(updatedPeople);
  };

  return (
    <>
      {people.map((person, index) => (
        <div key={index}>
          <PersonCard {...person} />
          <BirthdayButton age={person.age} onBirthdayClick={() => handleBirthdayClick(index)} />
        </div>
      ))}
    </>
  );
}

export default App