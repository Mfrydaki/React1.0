import { useState, useEffect } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("✅ Updated value:", value);
  }, [value]);

  const handleClick = () => {
    setValue((currentState) => currentState + 1);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
