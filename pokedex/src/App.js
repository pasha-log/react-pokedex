import React from 'react';
import Pokecard from './pokecard';
import pokedex from './pokedex';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Pokecard pokedex={pokedex} />
    </div>
  );
}

export default App;
