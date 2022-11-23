import './App.css';
import Datos from './components/Datos';
import { useState } from 'react';



function App() {
  const [pokemon, setpokemon] = useState('')

  const onChangeFn = (event) => {
    setpokemon(event.target.value)
  }
  const onClickFn = () => {
    //setpokemon( {label: pokemon})
    console.log(pokemon,"https://pokeapi.co/api/v2/pokemon/"+pokemon)
  }
  return (
    <>
      <div className="App">
        <h1>Pokemon</h1>
        <input type="text" value={pokemon} onChange={onChangeFn} />
        <button type="button" className="btn btn-light" onClick={onClickFn}>Buscar</button>

      </div>

    </>

  );
}

export default App;
