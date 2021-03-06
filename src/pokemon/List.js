import React, { useEffect, useState } from "react";
import Paginacao from "./Paginacao";
import Detalhes from "./Detalhes";
import PokeLogo from '../images/PokemonLogo.webp';
import '../index.css';
import PokeSerch from './PokeSearch';
import DecorativeHeader from "./DecorativeHeader";
import PokeTable from "./PokeTable";
import SmoothRectangle from "./SmoothRectangle"
import useList from "../hooks/useList";

function List() {
  const [page, setPage] = useState(1);
  const [detalhes, setDetalhes] = React.useState('');
  var { pokemons, total, fetchFiltered } = useList();


  const handleChangePagination = (page) => {
    console.log(`pagina muda`, page);
    setPage(page)
  };
  
  const handleSearchChange = (nameSearch) => {
    const name = nameSearch.replace(' ', '-');
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetchDetalhes(url);
  };
  
  const HandleDetalhesChange = (detalhes) => {
    fetchDetalhes(detalhes);
  };
  
  function handleDetalhesClick(pokemon) {
    fetchDetalhes(pokemon);
  };
  
  const fetchDetalhes = (pokemon) => {
    setDetalhes(pokemon);
  }
      
  return (
    <div className='hold-base-container p-2'>
      <div className=' mlg:w-full msm:h-full p-2 base-pokedex thin-black-round'>
        <DecorativeHeader/>
        <div className='flex mmd:flex-wrap-reverse'>
          <div className='msm:w-90 rectangle thin-black-round rectangle--medium' style={{ backgroundColor: '#ff4f54' }}>
            <img src={PokeLogo} className='inline mt-1' style={{width: '150px', justifyContent: 'center'}}/>
            <div className='w-auto frame'>
              <div className='xl:w-96 msm:h-96 overflow-y-auto glass-display'>
                <PokeTable pokemon={pokemons}
                           handleDetalhesClick={handleDetalhesClick}
                           detalhes={detalhes}
                />
              </div>
            </div>
            <Paginacao onChange={handleChangePagination} total={total}/>
            <PokeSerch onChange={handleSearchChange} onFilter={fetchFiltered} page={page}/>
          </div>
          <SmoothRectangle className='mmd:mb-2 mlg:ml-2 mlg:w-96 rectangle'
                          border='thin-black-round' 
                          size='big' 
                          style={{ backgroundColor: '#ff4f54' }}>
            <div className='mlg:w-auto overflow-y-auto glass-display-details thin-black-round'>
              <Detalhes onChange={HandleDetalhesChange} detalhesInfo={detalhes} />
            </div>
          </SmoothRectangle>
        </div>
      </div>
    </div>
  );
}

export default List;
