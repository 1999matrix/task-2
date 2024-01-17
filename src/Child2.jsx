import React, { useState } from 'react';

const Child2 = ({ first, second }) => {
  const [fir, setfir] = useState(0);
  const [snd, setsnd] = useState(0);
  const [sm, setsm] = useState(0);
console.log(first , second)
  const handlefir = (e) => {
    let val = parseInt(e.target.value, 10);
    setfir(val);
  };

  const handlesnd = (e) => {
    let val = parseInt(e.target.value, 10);
    setsnd(val);
  };

  const handlesm = (e) => {
    let val = parseInt(e.target.value, 10);
    setsm(val);
  };

  return (
    <>
      <div>
        <span>{first}+</span>
        <input type='number' value={fir} onChange={handlefir} /> = <span>{fir + first}</span>
      </div>
      <div>
        <span>{second}+</span>
        <input type='number' value={snd} onChange={handlesnd} /> = <span>{snd + second}</span>
      </div>
      <div>
        <span>{first + second}+</span>
        <input type='number' value={sm} onChange={handlesm} /> = <span>{first + second + sm}</span>
      </div>
    </>
  );
};

export default Child2;
