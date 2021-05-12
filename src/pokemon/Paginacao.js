import React, { useEffect, useState } from "react";

const Paginacao = ({ onChange, total }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === "") return;
    onChange(page);
  }, [page]);

  const handlePreviusClick = () => {
    if (page <= 1) return;

    setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page >= Math.ceil(total / 20)) return;

    setPage(page + 1);
  };

  const handleChangeInput = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)) {
      return setPage("");
    }

    if (value > Math.ceil(total / 20)) return;
    setPage(value);
  };

  return (
    <div>
      <button disabled={page === "" || page ===1} onClick={handlePreviusClick}>
        Anterior
      </button>
      <input
        onChange={handleChangeInput}
        value={page}
        style={{ width: 30, marginLeft: 10, marginRight: 10 }}
      />
      <button disabled={page === "" || page >= Math.ceil(total / 20)} onClick={handleNextClick}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
