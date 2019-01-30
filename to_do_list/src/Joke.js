import React, { Component } from "react";

class Joke extends Component {
  render() {
    return (
      <div>
        <h3 style={{display: !this.props.data.question && "none"}}>Question: {this.props.data.question} </h3>
        <h3 style={{color: !this.props.data.quesiton && "#888888"}}>Answer: {this.props.data.punchLine} </h3>
        <br/>
      </div>
    );
  }
}

export default Joke;
