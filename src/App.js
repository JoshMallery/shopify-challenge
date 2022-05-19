import React, {Component} from "react";
import Form from "./Form";
import Response from "./Response";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
require('dotenv').config()
let first="sk-nDFdZtFff6nA55HOea31T3";
let second="BlbkFJgHsQgvIhX94IPFtVxRZ8";

class App extends Component {
  constructor() {
    super();
    this.state = {
      responses:[],
      loading: false,
      error:""
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
     Authorization: `Bearer ${first+second}`,
     // Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
   },
   body: JSON.stringify(data),
    })
  .then(response => response.json())
  .then(data => {
      this.setState({
        loading:false,
        responses:
        [
          { prompt:prompt,response:data.choices[0].text,id:data.id},
            ...this.state.responses
        ]
      })
    })
    .catch(error => this.setState({error:error.message}))
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
      <header className="header">
        <h1>Fun with AI!</h1>
        <div className="navigation-items">
          <NavLink exact to="/favorites" className="favorites">Favorites</NavLink>
          <NavLink exact to="/" className="home">Home</NavLink>
        </div>
      </header>
      <Route exact path="/" render={() => {
        return (
          <>
          {!this.state.responses.length && <h2>Please type a prompt in the Box below!</h2>}
          {this.state.loading && <h3>Loading Response From AI Now!</h3>}
          {this.state.error && <h3>{this.state.error}</h3>}
          <br/>
          <Form requestResponse={this.requestResponse} />
          <Response data={this.state.responses} deleteResponse={this.deleteResponse} changeFavorite={this.changeFavorite}/>
          </>
        )
        }}
      />
      <Route exact path="/favorites" render={() => {
          const favs = this.state.responses.filter(response => response.favorite);
          return (
            <>
            {favs.length ? <Response data={favs} deleteResponse={this.deleteResponse} changeFavorite={this.changeFavorite}/> : <div><h2>There are no favorites to display!</h2><br/></div>}
            </>
          )
        }}
      />
    </main>)
  };
};

export default App;
