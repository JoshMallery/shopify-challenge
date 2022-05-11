import React from "react";
import Card from "./Card"
import "./Response.css"

const Response = ({data,deleteResponse}) => {
  //need to map the array of state that was passed down
  const responseList = data.map(response =>{
    return(
      <Card

        id={response.id}
        prompt={response.prompt}
        response={response.response}
        deleteResponse={deleteResponse}
      />
    )
  })

  return(
    <div>
      {responseList}
    </div>
  )
}

export default Response