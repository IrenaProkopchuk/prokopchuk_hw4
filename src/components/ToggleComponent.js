import React, { Component } from 'react';

class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isVisible !== this.state.isVisible) {
      const message = this.state.isVisible
        ? 'Component Opened!'
        : 'Component Closed!';
      alert(message);
    }
  }

  render() {
    const { isVisible } = this.state;
    
    return (
      <div>
        <button onClick={this.handleToggle}>
          {isVisible ? 'Hide Component' : 'Show Component'}
        </button>
        {isVisible && <div>My Component</div>}
      </div>
    );
  }
}

export default ToggleComponent;