import PokeBola from '../images/pokeballSimple.png';

const PokeTable = ({ pokemons, imagePokemons, handleDetalhesClick, detalhesUrl }) => {
    return (
        <div>
            <table>
                <tbody>
                    {pokemons.map((pokemon, index) => {
                        const src = imagePokemons[index];
                        return (
                            <tr key={pokemon.name} className={detalhesUrl === pokemon.url ? 'table-itens' : ''}>
                                <td>
                                    #{pokemon.url.split('/')[6]}
                                </td>
                                <td className='text'>
                                    <img src={src} className='w-16' />
                                </td>
                                <td>
                                    {pokemon.name.replace('-', ' ')}
                                </td>
                                <td>
                                    <button style={{ backgroundColor: 'transparent' }}
                                        type="button"
                                        onClick={() => handleDetalhesClick(pokemon.url)}>
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