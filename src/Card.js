import React from "react";
import "./Card.css";

const Card = ({id,prompt,response,deleteResponse}) =>{

  return(
    <div>
      <h4>Prompt:</h4>
      <p>{prompt}</p>

      <h4>Response:</h4>
      <p>{response}</p>

      <button onClick={() => deleteResponse(id)}>Click to Delete</button>
    </div>
  )
}

export default Card;
