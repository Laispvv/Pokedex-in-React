import React, { useEffect, useState } from "react";
import DecorativeBall from './DecorativeBall';

const PokeSerch = ({ onChange }) => {
    const [nameSearch, setNameSearch] = React.useState('');

    useEffect(() => {
        if (nameSearch === '') return;
        onChange(nameSearch);
    }, [nameSearch]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if(value !== null) return setNameSearch(value);
        return setNameSearch('');
    }


    return(
        <div style={{display: "block"}}>
            <button className='round-button' >
            </button>
            <input className='input-search' onChange={handleInputChange}/>
        </div>
    );
};

export default PokeSerch;


