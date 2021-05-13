import React, { useEffect, useState } from "react";
import Paginacao from "./Paginacao";
import Detalhes from "./Detalhes";
import Icon from '../info.png';
import '../index.css';

function List() {
  const [pokemons, setPokemons] = useState([]);
  const [detalhes, setDetalhes] = React.useState('');
  const [detalhesUrl, setDetalhesUrl] = React.useState('');
  const [total, setTotal] = useState(0);

  const fetchPokemons = async (offset = 1, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${
      (offset - 1) * limit
    }&limit=${limit}`;
    const response = await fetch(url);
    const { results, count } = await response.json();
    setPokemons(results);
    setTotal(count);
  };

  //por que se eu não colocar o detalhes url ai dentro ele não funciona direito?
  const fetchDetalhes = async (detalhesUrl) => {
    const response = await fetch(detalhesUrl);
    const result = await response.json();
    setDetalhes(result);
  }

  useEffect(() => {
   fetchPokemons();
  }, []);

  const handlePaginationChange = (page) => {
    fetchPokemons(page);
  };
  
  const HandleDetalhesChange = (detalhes) => {
    fetchDetalhes(detalhes);
  };

  function handleDetalhesClick(url) {
    setDetalhesUrl(url);
    fetchDetalhes(url);
  };

  function SmoothRectangle({className = '', border = '', style, size, ...rest }){
    // if(offset === '') return;
    const bsize = size ? `rectangle--${size}` : ''
    return(
      <div className={`${className} ${border} ${bsize}`}
          style={{...style}}
          {...rest}
      />
    )
  }
  return (
    <div className='hold-base-container'>
      <div className='base-pokedex thin-black-round'>
        <div className='rectangle thin-black-round rectangle--medium' style={{ backgroundColor: '#fc353b'}}>
          {/* <SmoothRectangle className='rectangle' border='thin-black-round' size='medium' style={{ backgroundColor: '#fc353b'}}> */}
          <label className='poke-title'>Pokémon</label>
            <div className='frame'>
              <div className='glass-display'>
                <div>
                  <table>
                    <tbody>
                      {pokemons.map((pokemon) => (
                        <tr key={pokemon.name} className='table-itens'>
                          <td>#{pokemon.url.split('/')[6]}</td>
                          <td>
                            {pokemon.name}
                          </td>
                          <td>
                            <button style={{ backgroundColor: 'transparent' }} type="button" onClick={() => handleDetalhesClick(pokemon.url)}>
                              <img src={Icon} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          <Paginacao onChange={handlePaginationChange} total={total} />
          </div>
          {/* </SmoothRectangle> */}
          <SmoothRectangle className='rectangle' border='thin-black-round' size='big' style={{ backgroundColor: '#fc353b' }}>
          <div className='glass-display-details thin-black-round'>
            <Detalhes onChange={HandleDetalhesChange} detalhesInfo={detalhes} />
          </div>
          </SmoothRectangle>
      </div>
      {/* <div style={{display: 'flex'}}> */}
      {/* <div style={{ display: 'flex' }}>
      </div> */}
    </div>
// </div>
   
  );
}

export default List;
