import { useCallback, useEffect, useMemo, useState } from "react";
import useFetchPokemons from "./useFetchPokemons";

const usePokemonSearch = () => {
    const { pokemons } = useFetchPokemons();

    return useCallback((search) => {
        return pokemons.filter(pokemon => pokemon.name.replace("-", " ").includes(search.toLowerCase().replace(/ +/, " ").trim()))
    }, [pokemons])
};

export default usePokemonSearch;