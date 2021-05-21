import React from "react";
import PokeBola from "../../images/pokeballSimple.png";
import { usePokemonContext } from "../context/PokemonContext";

const getImage = (pokemon) => {
  return pokemon.sprites.front_default;
};

const Table = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } = usePokemonContext();

  const handleClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="w-auto frame">
      <div className="xl:w-96 msm:h-96 overflow-y-auto glass-display">
        <table>
          <tbody>
            {pokemons.map((pokemon) => {
              return (
                <tr
                  key={pokemon.name}
                  className={
                    selectedPokemon === pokemon.id ? "table-itens" : ""
                  }
                >
                  <td>#{pokemon.id}</td>
                  <td className="text">
                    <img src={getImage(pokemon)} className="w-16" />
                  </td>
                  <td>{pokemon.name.replace("-", " ")}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "transparent" }}
                      type="button"
                      onClick={() => handleClick(pokemon)}
                    >
                      <img
                        className="pokeball-details-button w-18"
                        src={PokeBola}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
