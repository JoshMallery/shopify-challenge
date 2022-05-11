import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      prompt: ""
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  submitHandler = (event) => {
  event.preventDefault();
  this.props.requestResponse(this.state.prompt)
}

  render() {
    return(
      <form>
        <input
          type="text"
          name="prompt"
          value={this.state.prompt}
          onChange={event => this.changeHandler(event)}
        />
        <button onClick={event => this.submitHandler(event)}>Click to SUBMIT a response</button>
      </form>
    )
  }


}

export default Form;
