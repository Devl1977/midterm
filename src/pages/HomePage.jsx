import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [pokemonArray, setPokemonArray] = useState([]);

  const getPokemonData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    console.log(getPokemonData);

    let updatedPokemonArray = [];

    for (const pokemon of data.results) {
      const details = await getPokemonDataWithInfo(pokemon.url);
      updatedPokemonArray.push({
        name: pokemon.name,
        image: details.sprites.front_default, // Pokémon image
        abilities: details.abilities.map((ability) => ability.ability.name),
      });

      setPokemonArray([...updatedPokemonArray]);
    }
  };
  const getPokemonDataWithInfo = async (url) => {
    const response = await fetch(url);
    return response.json();
  };
  useEffect(() => {
    getPokemonData();
  }, []);
  console.log(pokemonArray);
  return pokemonArray.map((pokemon, index) => {
    return (
      <div className="flex gap-8 items-center">
        <div key={index} className="p-4 rounded-2xl">
          <h1 className="text-xl ">Name: {pokemon.name}</h1>
          <img src={pokemon.image} width="400" />
          <Link to={`/pokemon/${pokemon.name}`}>Details</Link>
        </div>
      </div>
    );
  });
}
export default HomePage;
