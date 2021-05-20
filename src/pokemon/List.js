import React, { useEffect, useState } from "react";
import Paginacao from "./Paginacao";
import Detalhes from "./Detalhes";
import PokeLogo from '../images/PokemonLogo.webp';
import '../index.css';
import PokeSerch from './PokeSearch';
import DecorativeHeader from "./DecorativeHeader";
import PokeTable from "./PokeTable";
import SmoothRectangle from "./SmoothRectangle";


function List() {
  const [pokemons, setPokemons] = useState([]);
  const [imagePokemons, setImagePokemons] = useState([]);
  const [detalhes, setDetalhes] = React.useState('');
  const [detalhesUrl, setDetalhesUrl] = React.useState('');
  const [total, setTotal] = useState(0);

  const fetchPokemons = async (offset = 1, limit = 10) => {
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

  const fetchDetalhes = async (detalhesUrl) => {
    const response = await fetch(detalhesUrl);
    const result = await response.json();
    setDetalhes(result);
  }

  useEffect(() => {
    fetchImagePokemons(pokemons);
  }, [pokemons]);

  const handlePaginationChange = (page) => {
    fetchPokemons(page);
  };

  const handleSearchChange = (nameSearch) => {
    const name = nameSearch.replace(' ', '-');
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetchDetalhes(url);
  };

  const HandleDetalhesChange = (detalhes) => {
    fetchDetalhes(detalhes);
  };

  function handleDetalhesClick(url) {
    setDetalhesUrl(url);
    fetchDetalhes(url);
  };

  
  return (
    <div className='hold-base-container p-2'>
      <div className='base-pokedex thin-black-round'>
        <DecorativeHeader/>
        <div className='flex'>
          <div className='rectangle thin-black-round rectangle--medium' style={{ backgroundColor: '#ff4f54' }}>
            <img src={PokeLogo} className='inline mt-1' style={{width: '150px', justifyContent: 'center'}}/>
            <div className='frame'>
              <div className='glass-display'>
                <PokeTable pokemons={pokemons}
                           imagePokemons={imagePokemons}
                           handleDetalhesClick={handleDetalhesClick}
                           detalhesUrl={detalhesUrl}
                />
              </div>
            </div>
            <Paginacao onChange={handlePaginationChange} total={total} />
            <PokeSerch onChange={handleSearchChange} />
          </div>
          <SmoothRectangle className='rectangle'
                          border='thin-black-round' 
                          size='big' 
                          style={{ backgroundColor: '#ff4f54' }}>
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
