import React, { useEffect, useState } from "react";
import usePokemonSearch from "../hooks/usePokemonSearch";

const PokeSerch = ({ onFilter, page }) => {
    const [nameSearch, setNameSearch] = useState('');
    const onSearch = usePokemonSearch();
    
    const handleInputChange = (e) => {
        setNameSearch(e.target.value);
    };

    useEffect(() => {
        console.log(page);
        const pokemonsFiltered = onSearch(nameSearch);
        onFilter(pokemonsFiltered, page, 10);
    }, [onSearch, nameSearch, page]);

    return(
        <div className='inline-flex items-bottom'>
            <div class="-ml-10 mr-5 lg:inline-flex self-end hidden">
                <span class="self-end animate-ping h-8 w-8 absolute inline-flex rounded-full bg-blue-400 opacity-75 "></span>
                <span class="self-end relative inline-flex rounded-full h-8 w-8 bg-blue-500 border-2 border-gray-800"></span>
            </div>
            <input className='input-search p-3' onChange={handleInputChange}/>
        </div>
    );
};

export default PokeSerch;


