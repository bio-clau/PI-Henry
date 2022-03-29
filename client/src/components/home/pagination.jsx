import React from "react";
import styleP from "./pagination.module.css";

export default function Pagination({ pag, totPoke, paginate }) {
  let pageNumbers = [];
  for (let i = 0; i < Math.ceil(totPoke / 12); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div>
      <div className={styleP.pagination}>
        {pageNumbers.map((p) => (
          <button
            onClick={() => paginate(p)}
            className={pag === p ? styleP.selPag : undefined}
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
