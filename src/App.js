import React,{useState} from "react";
import "./style.css";
import Component from "./Component";

export default function App() {
  const [name, setName] = useState(true);
  function handle(){
    setName(!name)
  }

  let object = {name: "saloni"}
  return (
    <>
      <button onClick={handle}>
        {name ? "Hello" : "Saloni"}
      </button>
      <Component name={object.name}/>
    </>
    
  );
}
