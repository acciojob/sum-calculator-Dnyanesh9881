
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput]=useState(0);
  const [sum, setSum]=useState(0);
  useEffect(()=>{
      setSum(prev=>prev+parseInt(input));
  }, [input]);
  return (
    <div>
      <input type="number" onChange={(e)=>setInput(e.target.value)}/>
         <p>Sum :{sum}</p>
    </div>
  )
}

export default App
