import { data } from "../data";
import React from "react";

const useStateArray = () => {
    const [ people, setPeople ] = React.useState(data);
    
    return (
    <div>
       {people.map((person) => {
         const { id, name} = person;
            // console.log(person);
           return ( 
           <div key={id}>
            <h4>{name}</h4>
     </div>
      );
})}
</div>
);
};

export default useStateArray;