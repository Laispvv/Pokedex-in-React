import React, { useEffect, useState } from "react";
import Paginacao from "./Paginacao";
import Detalhes from "./Detalhes";
import Icon from '../info.png';
import PokeBola from '../pokeballSimple.png';
import '../index.css';
import PokeSerch from './PokeSearch';
import DecorativeBall from './DecorativeBall';

function List() {
  const [pokemons, setPokemons] = useState([]);
  const [imagePokemons, setImagePokemons] = useState([]);
  const [detalhes, setDetalhes] = React.useState('');
  const [detalhesUrl, setDetalhesUrl] = React.useState('');
  const [total, setTotal] = useState(0);

  const fetchPokemons = async (offset = 1, limit = 10) => {
    console.log(offset);
    var url = '';
    url = `https://pokeapi.co/api/v2/pokemon?offset=${(offset - 1) * limit
      }&limit=${limit}`;
    const response = await fetch(url);
    const { results, count } = await response.json();
    setPokemons(results);
    setTotal(count);
  };

  const fetchImagePokemons = async (pokemons) => {
    var promisses = pokemons.map(async element => {
      var url = element.url.toString();
      var response = await fetch(url);
      var { sprites } = await response.json();
      return sprites.front_default;
    });
    var imagens = await Promise.all(promisses);
    setImagePokemons(imagens);
  };

  // por que se eu não colocar o detalhes url ai dentro ele não funciona direito?
  const fetchDetalhes = async (detalhesUrl) => {
    const response = await fetch(detalhesUrl);
    const result = await response.json();
    setDetalhes(result);
  }

  useEffect(() => {
    console.log(imagePokemons);
    fetchImagePokemons(pokemons);
  }, [pokemons]);

  const handlePaginationChange = (page) => {
    fetchPokemons(page);
  };

  const handleSearchChange = (nameSearch) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameSearch}`
    fetchDetalhes(url);
  };

  const HandleDetalhesChange = (detalhes) => {
    fetchDetalhes(detalhes);
  };

  function handleDetalhesClick(url) {
    setDetalhesUrl(url);
    fetchDetalhes(url);
  };

  const SmoothRectangle = ({ className = '', border = '', style, size, ...rest }) => {
    const bsize = size ? `rectangle--${size}` : '';
    return (
      <div className={`${className} ${border} ${bsize}`}
        style={{ ...style }}
        {...rest}
      />
    );
  }
  
  const PokeTable = ({ pokemons, imagePokemons, handleDetalhesClick }) => {
    return (
      <div>
        <table>
          <tbody>
            {pokemons.map((pokemon, index) => {
              const src = imagePokemons[index];
              console.log(pokemon, src, JSON.stringify(imagePokemons));
              return (
                <tr key={pokemon.name} className={detalhesUrl===pokemon.url ? 'table-itens': ''}>
                  <td>
                    #{pokemon.url.split('/')[6]}
                  </td>
                  <td>
                    <img src={src} style={{ width: '60px'}} />
                  </td>
                  <td>
                    {pokemon.name.replace('-', ' ')}
                  </td>
                  <td>
                    <button style={{ backgroundColor: 'transparent' }} type="button" onClick={() => handleDetalhesClick(pokemon.url)}>
                      <img className='pokeball-details-button' src={PokeBola} />
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

  return (
    <div className='hold-base-container'>

      <div className='base-pokedex thin-black-round'>
        <div style={{ display: 'flex' }}>
          <div style={{ justifyContent: 'start' }}>
            <DecorativeBall ballSize='big' style={{ marginLeft: '15px' }} />
            <DecorativeBall ballSize='medium' />
            <DecorativeBall ballSize='small' />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <DecorativeBall ballSize='small' />
            <DecorativeBall ballSize='medium' />
            <DecorativeBall ballSize='big' style={{ marginRight: '15px' }} />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className='rectangle thin-black-round rectangle--medium' style={{ backgroundColor: '#ff4f54' }}>
            <label className='poke-title'>Pokémon</label>
            <div className='frame'>
              <div className='glass-display'>
                <PokeTable pokemons={pokemons} imagePokemons={imagePokemons} handleDetalhesClick={handleDetalhesClick}/>
              </div>
            </div>
            <Paginacao onChange={handlePaginationChange} total={total} />
            <PokeSerch onChange={handleSearchChange} />
          </div>
          <SmoothRectangle className='rectangle' border='thin-black-round' size='big' style={{ backgroundColor: '#ff4f54' }}>
            <div className='glass-display-details thin-black-round'>
              <Detalhes onChange={HandleDetalhesChange} detalhesInfo={detalhes} />
            </div>
          </SmoothRectangle>
        </div>
      </div>
    </div>
  );
}


export default List;
