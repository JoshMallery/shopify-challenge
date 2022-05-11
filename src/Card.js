import React from "react";
import "./Card.css";

const Card = ({id,prompt,response,favorite,deleteResponse,changeFavorite}) =>{

  return(
    <div>
      <h4>Prompt:</h4>
      <p>{prompt}</p>

      <h4>Response:</h4>
      <p>{response}</p>

      <button onClick={() => changeFavorite(id)}>{!favorite ? "Click to favorite" : "Click to unfavorite"}</button>
      <button onClick={() => deleteResponse(id)}>Click to Delete</button>
    </div>
  )
}

export default Card;
