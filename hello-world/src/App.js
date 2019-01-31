import React, {Component} from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
        <h1>It works!</h1>
      </div>
    );
  }
}

export default App;
