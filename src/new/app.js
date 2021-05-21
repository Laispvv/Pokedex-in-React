import React from "react";
import Pokedex from "./components/Pokedex";
import { PokemonProvider } from "./context/PokemonContext";

const App = () => {
    return (
        <PokemonProvider>
            <Pokedex />
        </PokemonProvider>
    );
};

export default App;
