import { useState } from "react"

const UseState = () =>{
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setCount (count +1);
 };

 return(

    <>
    <h4>You clicked {count} times</h4>
    <button type="button" onClick={handleClick} className="btn">Click me</button>
     </>
 );
};
export default UseState;
