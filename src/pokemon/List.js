import React, { useEffect, useState } from "react";
import Paginacao from "./Paginacao";
import Detalhes from "./Detalhes";
import '../index.css';

function List() {
  const [pokemons, setPokemons] = useState([]);
  const [detalhes, setDetalhes] = React.useState('');
  const [detalhesUrl, setDetalhesUrl] = React.useState('');
  const [total, setTotal] = useState(0);

  const fetchPokemons = async (offset = 1, limit = 20) => {
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
    console.log(result);
    setDetalhes(result);
  }

  useEffect(() => {
   fetchPokemons(1);
  }, []);

  const handlePaginationChange = (page) => {
   fetchPokemons(page);
  };
  
  const HandleDetalhesChange = (detalhes) => {
    console.log("teste");
    fetchDetalhes(detalhes);
  };

  function handleDetalhesClick(url) {
    setDetalhesUrl(url);
    fetchDetalhes(url);
  };

  function Form({ className = '', typeForm = 'box', style, size, ...rest }) {
    const bsize = size ? `box--${size}` : ''
    return (
      <div className={`${typeForm} ${className} ${bsize}`}
        style={{ fontStyle: 'italic', ...style }}
        {...rest}
      />
    )
  }

  // function SmoothRectangle({ className = '', border = '', style, size, ...rest }){
  //   const bsize = size ? `rectangle--${size}` : ''
  //   return(
  //     <div className={`${className} ${border} ${bsize}`}
        
  //     />
  //   )
  // }
  return (
    <div id="list-detalhes-container" className="poke-red" style={{ display: "flex", backgroundColor: '#ec1b23'}}>
      <div >
        <table style={{ display: "grid" }}>
          <label style={{ display: "flex", justifyContent: "center"}}>Pokémon</label>
          <tbody>
            {pokemons.map((pokemon, index) => (
              <tr key={pokemon.name}>
                <td>#{pokemon.url.split('/')[6]}</td>
                <td style={{ textTransform: "capitalize" }}>
                  {pokemon.name}
                </td>
                <td>
                  <button type="button" onClick={() => handleDetalhesClick(pokemon.url)}>Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Paginacao onChange={handlePaginationChange} total={total} />
      </div>
      <div >
        <Detalhes onChange={HandleDetalhesChange} detalhesInfo={detalhes}/>
      </div>
    </div>
  );
}

export default List;