import { useCallback, useMemo, useState } from "react";

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const usePokemon = () => {
  const [pokemonSearch, setPokemonSearch] = useState([]);

  const fetchPokemonSearch = useCallback(
    async (nameSearch) => {
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118`;

      const results = await getData(url);
      results.results.map(async (pokemon) => {
          if (pokemon.name.includes(nameSearch)) {
            console.log(pokemon.name)
          }
      });
      setPokemonSearch(results);
    },
    [setPokemonSearch]
  );

  return useMemo(
    () => ({ pokemonSearch, fetchPokemonSearch }),
    [pokemonSearch, fetchPokemonSearch]
  );
};

export default usePokemon;
