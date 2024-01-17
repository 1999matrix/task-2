import { useState } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setsecond] = useState(0);
  const handleFirst = (val) => {
    setFirst(val);
  };
  const handleSecond = (val) => {
    setsecond(val);
  };
  return (
    <>
      <Child1 handleFirst={handleFirst} handleSecond={handleSecond} />
      <Child2 first={first} second={second} />
    </>
  );
}

export default App;
