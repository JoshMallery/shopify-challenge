import React, {Component} from "react";
import Form from "./Form";
import Response from "./Response";
import "./App.css";
require('dotenv').config()

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses:
      [
        {id: 1, prompt:"pizzaa",response:"pastass",favorite:false},
        {id: 2, prompt:"cars",response:"ford, GM",favorite:true}
      ]
    }
  }


requestResponse = (prompt) => {
  const data = {
   prompt: prompt,
   temperature: 0.5,
   max_tokens: 64,
   top_p: 1.0,
   frequency_penalty: 0.0,
   presence_penalty: 0.0,
 };

  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
   },
   body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => this.addResponse(data,prompt))
  }


addResponse = (data,prompt) => {
  this.setState({responses: [{prompt:prompt,response:data.choices[0].text,id:data.id},...this.state.responses]});
}

deleteResponse = (id) => {
  const filteredResponses = this.state.responses.filter(response => response.id !== id);
  this.setState({responses:filteredResponses});
}

changeFavorite = (id) => {
  const flipFavorite = this.state.responses.map(response =>{
    if(response.id === id) {
      response.favorite = !response.favorite
    }
    return response
  })
  this.setState({ideas:flipFavorite})
}

render() {
  return(
    <main className="App">
      <h1>Fun with AI!!</h1>
      {!this.state.responses.length && <h3>You should totally talk to the Bot! input data in the form and submit!</h3>}
      <Form requestResponse={this.requestResponse} />
      <Response data={this.state.responses} deleteResponse={this.deleteResponse} changeFavorite={this.changeFavorite}/>
    </main>
  )
}


}

export default App;
