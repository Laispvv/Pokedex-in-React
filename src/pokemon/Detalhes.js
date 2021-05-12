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
                    <div key={`abilities ${item.type.name}`}>
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
                    <div key={`abilities ${item.ability.name}`}>
                        {item.ability.name}
                    </div>
                ))}
            </div>
        )
    }

    function ShowPokemonSprite(imageUrl, alt){
        console.log(imageUrl.imageUrl)
        const url = imageUrl.imageUrl;
        // const response = await fetch(imageUrl);
        // const image = await response.json();
        return(
            <div>
                <img src={url} alt={alt}/>
            </div>
        )
    }


    function InfoPokemon(){
        return(
            <div>
                <div>
                    <ShowPokemonSprite imageUrl={detalhesInfo.sprites.front_default} alt={detalhesInfo.name}/>
                </div>
                <div>
                    <label>Nome:</label>
                    <div>
                        {detalhesInfo.name}
                    </div>
                </div>
                <div>
                    <MostrarTodosTipos types={detalhesInfo.types}/>
                    <MostrarTodasHabilidades types={detalhesInfo.abilities}/>
                </div>
            </div>
        )
    }

    if(detalhesInfo === '') return null;

    return(
        <div>
            Detalhes
            <InfoPokemon/>
        </div>
    );
};

export default Detalhes