import React from "react";
import "./Card.css";
import notFavoriteHeart from "./images/notFavorite.png"
import favoriteHeart from "./images/favorite.png"


const Card = ({id,prompt,response,favorite,deleteResponse,changeFavorite}) =>{

  return(
    <div className="card">
      <p className="card-title">Prompt:</p>
      <p>{prompt}</p>

      <p className="card-title">Response:</p>
      <p>{response}</p>

      <button onClick={() => changeFavorite(id)}>{!favorite ? <img src={notFavoriteHeart} alt="unfavorited Heart Icon"/> : <img src={favoriteHeart} alt="favorited Heart Icon"/>}</button>
      <button onClick={() => deleteResponse(id)}>Click to Delete from List</button>
    </div>
  )
}

export default Card;
