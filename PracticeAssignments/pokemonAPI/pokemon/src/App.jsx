import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    axiosPokemon();

  }, []);

  const fetchPokeMon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(serverResponseObject => {
        return serverResponseObject.json();
      })
      .then(jsonData => {
        console.log(jsonData.results);
        setPokemon(jsonData.results);
      })
      .catch(serverErr => console.log("❌❌❌", serverErr));
  };
  // axios
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(serverObj => {
        // axios wraps its response inside a '.data' key
        console.log(serverObj.data.results);
        setPokemon(serverObj.data.results);
      })
      .catch(serverErr => console.log("❌❌❌", serverErr));
  };

  return (
    <>
      <h1>PokeMon!</h1>
      <hr />
      <button onClick={fetchPokeMon}> Who's that Pokemon?!</button>
      <button onClick={axiosPokemon}> AXIOS me</button>
      {
        pokemon.map((pokemon, index) => {
          return (
            <div key={index}>{pokemon.name}</div>
          );
        })
      }
    </>
  );
}

export default App;