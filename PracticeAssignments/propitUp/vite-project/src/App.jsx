import './App.css'
import React from 'react';
import PersonCard from './components/PersonCard';

const App = (props) => {
  return (
    <div className="App">
      <PersonCard name={'Jane Doe'} age={41} hairColor={'green'} />
      <PersonCard name={'Leroy Jenkins'} age={19} hairColor={'red'} />
      <PersonCard name={'Jimmy Neutron'} age={27} hairColor={'black'} />
      <PersonCard name={'Dee Dee'} age={30} hairColor={'white'} />
    </div>
  );
}
export default App;