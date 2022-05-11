import React, {Component} from "react";
import Form from "./Form";
import Responses from "./Responses";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses:
      [
      {prompt:"pizzaa",response:"pastass"}
      ]
    }
  }

addResponse = ({prompt,response}) => {

  //some cool fetch stuff here component will Mount?
  this.setState(responses:[{prompt:prompt,response:response,...this.state.responses}]);
}

deleteResponse = (id) => {
  const filteredResponses = this.state.responses.filter(response => response.id !== id);
  this.setState({responses:filteredResponses});
}

render() {
  return(
    <main classname="App">
      <h1>Fun with AI!!</h1>
      {!this.state.responses.length && <h3>You should totally talk to the Bot! input data in the form and submit!</h3>}
      <Form addResponse={this.addResponse}/>
      <Responses data={this.state.responses} deleteResponse={this.deleteResponse}/>
    </main>
  )
}


}

export default App;
