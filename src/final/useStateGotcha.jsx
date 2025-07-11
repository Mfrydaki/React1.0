import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
        return currentState +1;

    });
    console.log(value); 
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
