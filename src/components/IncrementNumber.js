
import React, { Component } from 'react';

class IncrementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(){
    return this.state.count < 3;
}
  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default IncrementComponent;