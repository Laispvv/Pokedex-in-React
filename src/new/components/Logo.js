import React from "react";
import logo from "../../images/PokemonLogo.webp";

const Logo = () => {
  return (
    <div id={"title"}>
      <img src={logo} className='inline mt-1' style={{ width: '150px', justifyContent: 'center' }} />
    </div>
  );
}

export default Logo;
