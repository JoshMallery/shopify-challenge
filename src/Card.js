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

      {!favorite ? <img src={notFavoriteHeart} alt="unfavorited Heart Icon" onClick={() => changeFavorite(id)}/> : <><span>Liked!</span> <img src={favoriteHeart} alt="favorited Heart Icon" onClick={() => changeFavorite(id)}/></>}
      <button onClick={() => deleteResponse(id)}>Delete Response</button>
    </div>
  )
}

export default Card;
