import { useCallback, useMemo, useState } from "react";

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const useList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchFiltered =  useCallback(
    async (pokemonsFiltered, page = 1, limit = 10) => {
      const pokemonsPaginated = pokemonsFiltered.slice((page - 1) * limit, page * limit)

      const promises = pokemonsPaginated.map(
        async (pokemon) => await getData(pokemon.url)
      );
      const result = await Promise.all(promises);

      setPokemons(result);
      setTotal(pokemonsFiltered.length);
    },
    [setPokemons, setTotal]
  );

  return useMemo(
    () => ({
      pokemons,
      total,
      fetchFiltered
    }),
    [pokemons, total, fetchFiltered]
  );
};

export default useList;
