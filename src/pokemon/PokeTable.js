import PokeBola from '../images/pokeballSimple.png';
import React, { useEffect, useState } from "react";

const PokeTable = ({ pokemon, handleDetalhesClick, detalhes }) => {

    const getImage = (pokemon) => {
        return pokemon.sprites.front_default;
    };


    return (
        <div>
            <table>
                <tbody>
                    {pokemon.map((pokemon) => {
                        return (
                            <tr key={pokemon.name} className={detalhes.id === pokemon.id ? 'table-itens' : ''}>
                                <td>
                                    #{pokemon.id}
                                </td>
                                <td className='text'>
                                    <img src={getImage(pokemon)} className='w-16' />
                                </td>
                                <td>
                                    {pokemon.name.replace('-', ' ')}
                                </td>
                                <td>
                                    <button style={{ backgroundColor: 'transparent' }}
                                        type="button"
                                        onClick={() => handleDetalhesClick(pokemon)}>
                                        <img className='pokeball-details-button w-18' src={PokeBola} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PokeTable;