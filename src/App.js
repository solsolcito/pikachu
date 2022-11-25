import './App.css';
import Datos from './components/Datos';
import { useState } from 'react';



function App() {
  const [pokemon, setPokemon] = useState('')
  const [pokemonA, setPokemonA] = useState({ sprites: { front_default: null }, abilities: [] })




  const onChangeFn = (event) => {
    setPokemon(event.target.value)
  }
  const onClickFn = () => {
    //setpokemon( {label: pokemon})                  
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(response => response.json())
      .then((lleguePokemon) => {
        setPokemonA(lleguePokemon)
        console.log(lleguePokemon)
      })
  }

  return (
    <>
      <div className="App">
        <h1>Pokemon</h1>
        <br />
        <input type="text" value={pokemon} onChange={onChangeFn} />
        <button type="button" className="btn btn-light ms-4" onClick={onClickFn}>Buscar</button>
        <br />
        <br />
        <h2>Tu Pokemon : </h2>
        <br />
                          
        <img src={pokemonA.sprites.front_default} className="imagen" />
        <h3>{pokemonA.name}</h3>
      </div>

    </>

  );
}

export default App;
