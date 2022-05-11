import React from "react";
import "./Card.css";

const Card = ({props}) =>{

  return(
    <div>
      <h4>Prompt:</h4>
      <p>{this.props.prompt}</p>
      <h4>Response:</h4>
      <p>{this.props.response}</p>
    </div>
  )
}

export default Card;
