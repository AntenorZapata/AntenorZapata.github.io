import React from 'react';

function Title({ text, shadow }) {
  return (
    <div className="title">
      <h1>
        {text}
        <span>{shadow}</span>
      </h1>
    </div>
  );
}

export default Title;
