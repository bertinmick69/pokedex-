import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonindex, setpokemonindex] = useState(0);
  const precedent = () => {
    if (pokemonindex > 0) {
      setpokemonindex(pokemonindex - 1);
    }
  };
  const suivant = () => {
    if (pokemonindex < pokemonList.length - 1) {
      setpokemonindex(pokemonindex + 1);
    }
  };
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mewtwo",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    },
    {
      name: "mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
    {
      name: "flamesh",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      name: "dragonfeu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[pokemonindex];
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      {pokemonindex > 0 && <button onClick={precedent}>precedent</button>}
      {pokemonindex < pokemonList.length - 1 && (
        <button onClick={suivant}>suivant</button>
      )}
    </div>
  );
}

export default App;
