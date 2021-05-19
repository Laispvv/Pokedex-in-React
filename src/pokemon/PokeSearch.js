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
        <div className='inline-flex items-bottom'>
            <div class="-ml-10 mr-5 lg:inline-flex self-end hidden">
                <span class="self-end animate-ping h-8 w-8 absolute inline-flex rounded-full bg-blue-400 opacity-75 "></span>
                <span class="self-end relative inline-flex rounded-full h-8 w-8 bg-blue-500 "></span>
            </div>
            {/* <button className='border-2 border-gray-700 round-button animate-ping ' >
            </button> */}
            <input className='input-search' onChange={handleInputChange}/>
        </div>
    );
};

export default PokeSerch;


