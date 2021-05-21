import { useCallback, useEffect, useMemo, useState } from "react";

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const useList = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const fetchAll = useCallback(async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`;
    const { results } = await getData(url);
    setAllPokemons(results);
  }, [setAllPokemons]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return useMemo(
    () => ({
      allPokemons,
    }),
    [allPokemons]
  );
};

export default useList;

