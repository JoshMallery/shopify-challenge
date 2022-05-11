import React, {Component} from "react";
import Form from "./Form";
import Response from "./Response";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses:
      [
      {id:1, prompt:"pizzaa",response:"pastass"},
      {id:2, prompt:"cars",response:"ford, GM"}
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
   Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
 },
 body: JSON.stringify(data),
})
.then(data=>console.log(data))

;
}


addResponse = (prompt,response) => {

  //some cool fetch stuff here component will Mount?
  this.setState({responses: [...this.state.responses,{prompt:prompt,response:response}]});
}

deleteResponse = (id) => {
  const filteredResponses = this.state.responses.filter(response => response.id !== id);
  this.setState({responses:filteredResponses});
}

render() {
  return(
    <main className="App">
      <h1>Fun with AI!!</h1>
      {!this.state.responses.length && <h3>You should totally talk to the Bot! input data in the form and submit!</h3>}
      <Form addResponse={this.addResponse}/>
      <Response data={this.state.responses} deleteResponse={this.deleteResponse}/>
    </main>
  )
}


}

export default App;
