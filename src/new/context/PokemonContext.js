import React, { createContext, useContext, useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import usePokemonSearch from "../hooks/usePokemonSearch";

const PokemonContext = createContext();
PokemonContext.displayName = "PokemonContext";

const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (typeof context === "undefined")
    throw new Error("Contexto Pokémon não identificado.");

  return context;
};

const PokemonProvider = ({ children }) => {
  const { doFilter, total, pokemons } = usePokemonSearch();
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    doFilter(search, page, limit);
  }, [doFilter, search, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const value = useMemo(
    () => ({
      page,
      setPage,
      search,
      setSearch,
      limit,
      pokemons,
      total,
      selectedPokemon,
      setSelectedPokemon,
    }),
    [pokemons, total, selectedPokemon, page, search, limit]
  );

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export { PokemonProvider, usePokemonContext };
