import React from "react";
import "../styles/counter.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = (e) => {
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    return (
      <div className="content">
      <div className="container">
        <div className="counter row"><h1>Has dado {this.state.counter} clicks!</h1></div>
        <button className="btn btn-primary" onClick={this.handleClick}>Click me!</button>
      </div>
      </div>
    );
  }
}

export default Counter;
