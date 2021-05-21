import React from "react";
import { usePokemonContext } from "../context/PokemonContext";

const Pagination = () => {
  const { page, limit, total, setPage } = usePokemonContext();

  const handlePreviusClick = () => {
    if (page <= 1) return;

    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleChangeInput = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      return setPage("");
    }

    if (value > Math.ceil(total / limit)) return;
    setPage(value);
  };

  return (
    <div>
      <button disabled={page === "" || page === 1} onClick={handlePreviusClick}>
        {"<<"}
      </button>
      <input
        onChange={handleChangeInput}
        value={page}
        style={{ width: 60, marginLeft: 10, marginRight: 10 }}
      />
      <button
        disabled={page === "" || page >= Math.ceil(total / limit)}
        onClick={handleNextClick}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
