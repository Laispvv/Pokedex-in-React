import React from "react";
import Logo from "./Logo";
import DecorativeHeader from "../DecorativeComponents/DecorativeHeader";
// import Modal from "./Modal";
// import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "./Pagination";
import Detalhes from "./Detalhes";

const Pokedex = () => {
  return (
    <div className="hold-base-container p-2">
      <div className=" mlg:w-full msm:h-full p-2 base-pokedex thin-black-round bg-red-600">
        <DecorativeHeader />
        <div className="flex mmd:flex-wrap-reverse">
          <div
            className="msm:w-90 rectangle thin-black-round rectangle--medium bg-red-500"
          >
            <Logo />
            <Table />
            <Pagination/>
            <SearchBar/>
          </div>
          <div className="mmd:mb-2 mlg:ml-2 mlg:w-96 rectangle rectangle--big p-5 thin-black-round bg-red-500">
            <div className="mlg:w-auto overflow-y-auto glass-display-details thin-black-round">
              <Detalhes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
