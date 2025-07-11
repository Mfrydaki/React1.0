import { data } from "../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);


const removeItem = (id) =>{
  //  const newPeople = people.filter((person)=>person.id !== id)
   setPeople( people.filter((person)=>person.id !== id));
};
   
const clearAllItems = () =>{
   setPeople([]);
};

return (
   <div>
    {people.map((person) => {
      const { id, name } = person;
        return (
          <div key={id}>
            <h4><center>{name}</center></h4>
            <button type="button" onClick={()=> removeItem(id)}>
              remove
            </button>
         </div>
        );
      })
}
    <button 
      type="button" 
      style={{marginTop: "2rem"}} 
      className= "btn"
      onClick={clearAllItems}>
        clear all
     </button>
    </div>
  );
};

export default UseStateArray;
