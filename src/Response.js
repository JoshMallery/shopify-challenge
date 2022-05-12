import React from "react";
import Card from "./Card"
import "./Response.css"

const Response = ({data,deleteResponse,changeFavorite}) => {
  const responseList = data.map(response =>{
    return(
      <Card
        key={response.id}
        id={response.id}
        prompt={response.prompt}
        response={response.response}
        deleteResponse={deleteResponse}
        changeFavorite={changeFavorite}
        favorite={response.favorite}
      />
    )
  });

  return(
    <div className="responses-container">
      {responseList}
    </div>
  )
};

export default Response
