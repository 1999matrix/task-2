import React, { useState } from "react";

const Child1 = ({ handleFirst, handleSecond }) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const handleChild1First = (val) => {
    handleFirst(val);
  };
  
  const handleChild1Second = (val) => {
    handleSecond(val);
  };

  const handleChange1 = (e) => {
    let val = parseInt(e.target.value, 10);
    setFirst(val);
    handleChild1First(val);
  };

  const handleChange2 = (e) => {
    let val = parseInt(e.target.value, 10);
    setSecond(val);
    handleChild1Second(val);
  };

  return (
    <>
      <div>
        <label>
          First:
          <input
            type="number"
            value={first}
            id="first"
            onChange={handleChange1}
          />
        </label>
        <label>
          {" "}
          Second:
          <input
            type="number"
            value={second}
            id="sec"
            onChange={handleChange2}
          />
        </label>
        <h3>Addition:</h3>
        <span>{first + second}</span>
      </div>
    </>
  );
};

export default Child1;
