import { useCallback, useMemo, useState } from "react";
import useList from "./useList";

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const usePokemonSearch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(0);

  const { allPokemons } = useList();

  const doFilter = useCallback(
    async (search, page = 1, limit = 10) => {
      const pokemonsFiltered = allPokemons
        .filter(({name}) => name.includes(search.toLowerCase()))
      const pokemonsPaginated = pokemonsFiltered
        .slice((page - 1) * limit, page * limit);

      const promises = pokemonsPaginated.map(
        async (pokemon) => await getData(pokemon.url)
      );

      const result = await Promise.all(promises);

      setPokemons(result);
      setTotal(pokemonsFiltered.length);
    },
    [allPokemons, setPokemons, setTotal]
  );

  return useMemo(
    () => ({
      pokemons,
      total,
      doFilter,
    }),
    [pokemons, total, doFilter]
  );
};

export default usePokemonSearch;
