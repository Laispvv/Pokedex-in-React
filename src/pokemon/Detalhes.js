import React, { useEffect, useState } from "react";

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

    function MostrarStatus(stats){
        return (
            <div key='stats'>
            <label>Status:</label>
                {stats.types.map((item) => (
                    <div className='info-poke-item' key={`stats ${item.stat.name}`}>
                        {item.stat.name}: {item.base_stat}
                    </div>
                ))}
            </div>
        )
    }

    function ShowPokemonSprite(imageUrl, alt){
        const url = imageUrl.imageUrl;
        if(url === null) return null;
        // const response = await fetch(imageUrl);
        // const image = await response.json();
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
                <div className='super-thin-grey-round details-screen details-image'>
                    <ShowPokemonSprite imageUrl={detalhesInfo.sprites.front_default} alt={detalhesInfo.name}/>
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
                    <MostrarStatus types={detalhesInfo.stats}/>
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