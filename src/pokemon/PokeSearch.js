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
        <div className='inline-flex'>
            {/* <span class="inline-flex h-1 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span> */}
            {/* <button className='border-2 border-gray-700 round-button animate-ping ' >
            </button> */}
            <input className='input-search' onChange={handleInputChange}/>
        </div>
    );
};

export default PokeSerch;


