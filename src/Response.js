import React from "react";
import Card from "./Card"
import "./Response.css"

const Response = ({props}) => {
  //need to map the array of state that was passed down
  const responseList = props.map(response =>{
    return(
      <Card
        key={response.id}
        id={response.id}
        prompt={response.prompt}
        response={response.response}
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
