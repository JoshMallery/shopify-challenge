import React from "react";
import "./Card.css";

const Card = ({id,prompt,response,deleteResponse}) =>{

  return(
    <div key={id}>
      <h4>Prompt:</h4>
      <p>{prompt}</p>
      <h4>Response:</h4>
      <p>{response}</p>
      <button onClick={() => deleteResponse(id)}></button>
    </div>
  )
}

export default Card;
