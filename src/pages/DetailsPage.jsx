import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { pokemon: pokemonParam } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonParam}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log("there was a problem fetching data");
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <h1>Loading...</h1>;

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl">
      <h1 className="text-3xl font-bold">{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width="400" />
      <h2 className="text-2xl mt-4">Abilities:</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="text-lg">
            {ability.ability.name}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mt-4">Stats:</h2>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index} className="text-lg">
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailsPage;
