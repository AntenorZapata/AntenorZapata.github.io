import React from 'react';

function Btn({ labels, handleFilter, modal }) {
  return (
    <div className="btns">
      {modal ? (
        <button onClick={() => handleFilter(labels)} className="btn">
          Voltar
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default Btn;
