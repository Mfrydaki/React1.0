import { useState } from "react";

const UseStateObject = () =>{
    const [name, setName] = useState('marika');
    const [age, setAge] = useState(34);
    const [hobby , setHobby] = useState('read books');

const displayPerson = () =>{
    setName ('Maria');
    setAge(37);
    setHobby('scream at the pc');
};

    return(
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys : {hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show marika
      </button>
    </>
    );
};


export default UseStateObject;
