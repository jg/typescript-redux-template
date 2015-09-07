/// <reference path="../references.ts" />

import * as React from 'react';

interface CounterProps {
  increment: any
  incrementIfOdd: any
  incrementAsync: any
  decrement: any
  counter: any
}

class Counter extends React.Component<CounterProps, {}> {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    window['props'] = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
