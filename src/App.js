import React, {Component} from "react";
import Form from "./Form";
import Response from "./Response";
import "./App.css";
require('dotenv').config()

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses:[],
      loading: false
    }
  }


requestResponse = (prompt) => {
  this.setState({loading:true});

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
  .then(data => {
      this.setState({
        loading:false,
        responses:
        [
          { prompt:prompt,
            response:data.choices[0].text,
            id:data.id
          },
            ...this.state.responses
        ]
      })
    });
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
      <h1>Fun with AI!</h1>
      {!this.state.responses.length && <h2>Please type a prompt in the Box below!</h2>}
      <Form requestResponse={this.requestResponse} />
      {this.state.loading && <h3>Loading Response From AI Now!</h3>}
      <Response data={this.state.responses} deleteResponse={this.deleteResponse} changeFavorite={this.changeFavorite}/>
    </main>
  )
}


}

export default App;
