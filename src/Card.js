import React from "react";
import "./Card.css";
import notFavoriteHeart from "./images/notFavorite.png"
import favoriteHeart from "./images/favorite.png"


const Card = ({id,prompt,response,favorite,deleteResponse,changeFavorite}) =>{

  return(
    <div>
      <h4>Prompt:</h4>
      <p>{prompt}</p>

      <h4>Response:</h4>
      <p>{response}</p>

      <button onClick={() => changeFavorite(id)}>{!favorite ? <img src={notFavoriteHeart} alt="unfavorited Heart Icon"/> : <img src={favoriteHeart} alt="favorited Heart Icon"/>}</button>
      <button onClick={() => deleteResponse(id)}>Click to Delete</button>
    </div>
  )
}

export default Card;
