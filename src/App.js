import React from 'react';

export const App = () => (<Counter></Counter>)

class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>count: {this.state.count}</div>
    )
  }
}