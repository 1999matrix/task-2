import React, { useState } from 'react';

const Child2 = ({ first, second }) => {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [var3, setVar3] = useState(0);

  const handlevar1 = (e) => {
    let val = parseInt(e.target.value, 10);
    setVar1(val);
  };

  const handlevar2= (e) => {
    let val = parseInt(e.target.value, 10);
    setVar2(val);
  };

  const handlevar3 = (e) => {
    let val = parseInt(e.target.value, 10);
    setVar3(val);
  };

  return (
    <>
      <div>
        <span>{first}+</span>
        <input type='number' value={var1} onChange={handlevar1} /> = <span>{var1 + first}</span>
      </div>
      <div>
        <span>{second}+</span>
        <input type='number' value={var2} onChange={handlevar2} /> = <span>{var2+ second}</span>
      </div>
      <div>
        <span>{first + second}+</span>
        <input type='number' value={var3} onChange={handlevar3} /> = <span>{first + second + var3}</span>
      </div>
    </>
  );
};

export default Child2;
