import React, { useEffect, useState } from "react";
import PokeStats from "./PokeStats";

const Detalhes = ({ onChange, detalhesInfo }) => {
    const [detalhes, setDetalhes] = React.useState('');

    useEffect(() => {
        if(detalhes === '') return;
            onChange(detalhes);
    }, [detalhes]);

    function MostrarTodosTipos(types){
        return(
            <div key='types'>
            <label>Tipo:</label>
                {types.types.map((item) => (
                    <div className='info-poke-item' key={`abilities ${item.type.name}`}>
                        {item.type.name}
                    </div>
                ))}
            </div>
        )
    }

    function MostrarTodasHabilidades(abilities){
        return (
            <div key='abilities'>
            <label>Habilidades:</label>
                {abilities.types.map((item) => (
                    <div className='info-poke-item' key={`abilities ${item.ability.name}`}>
                        {item.ability.name}
                    </div>
                ))}
            </div>
        )
    }

    function ShowPokemonSprite(imageUrl, alt){
        const official = imageUrl.imageUrl.other['official-artwork'].front_default;
        const dream = imageUrl.imageUrl.other.dream_world.front_default;
        const pixel = imageUrl.imageUrl.front_default;
        var url = official;
        if(official === null) url = dream;
        if(dream === null) url = pixel;
        if(url === null) return null;
        return(
            <div>
                <img src={url} alt={alt} style={{height: '150px', width: '150px'}}/>
            </div>
        )
    }

    if(detalhesInfo === '') {
        return(
            <div style={{}}>
                <div className='super-thin-grey-round details-screen details-image' >
                </div>
                <hr/>
                <div className='details-screen'>
                    <label>Name:</label>
                    
                </div>
                <hr/>
                <div className='details-screen'>
                    <label>Type:</label>
                </div>
                <hr/>
                <div className='details-screen'>
                    <label>Abilities:</label>
                </div>
                <hr/>
                <div className='details-screen'>
                    <label>Status:</label>
                </div>
                
            </div>
        )
    }

    function InfoPokemon(){
        return(
            <div style={{}}>
                <div className='details-screen details-image'>
                    <ShowPokemonSprite imageUrl={detalhesInfo.sprites} alt={detalhesInfo.name}/>
                </div>
                <hr />
                <div className='details-screen'>
                    <label>Nome:</label>
                    <div className='info-poke-item'>
                        {detalhesInfo.name}
                    </div>
                </div>
                <hr />
                <div className='details-screen'>
                    <MostrarTodosTipos types={detalhesInfo.types}/>
                </div>
                <hr />
                <div className='details-screen'>
                    <MostrarTodasHabilidades types={detalhesInfo.abilities}/>
                </div>
                <hr />
                <div className='details-screen'>
                    <PokeStats statsInfo={detalhesInfo.stats}/>
                </div>
            </div>
        )
    }


    return(
        <div>
            <InfoPokemon/>
        </div>
    );
};

export default Detalhes