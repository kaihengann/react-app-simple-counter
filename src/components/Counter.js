import React from 'react';
import Display from './Display';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  decrementCount() {
    this.setState(state => ({ count: state.count - 1 }));
  }

  checkColor = () => {
    return this.state.count >= 0 ? "display-positive" : "display-negative";
  };

  render() {
    return (
      <div className="counter">
        <Display
          count={this.state.count}
          className={`display ${this.checkColor()} `}
        />

        <Button
          className="btn btn-increment"
          text="Increment"
          onClick={this.incrementCount}
        />
        <Button
          className="btn btn-decrement"
          text="Decrement"
          onClick={this.decrementCount}
        />
      </div>
    );
  }
}

export default Counter;