import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      prompt: ""
    };
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  submitHandler = (event) => {
  event.preventDefault();
  this.props.requestResponse(this.state.prompt);
  this.setState({prompt:""});
}

  render() {
    return(
      <form>
        <input
          type="text"
          name="prompt"
          placeholder="Enter a Fun Question for the AI!"
          value={this.state.prompt}
          onChange={event => this.changeHandler(event)}
        />
        <br /><br />
        <button onClick={event => this.submitHandler(event)}>SUBMIT</button>
      </form>
    )
  }


};

export default Form;
