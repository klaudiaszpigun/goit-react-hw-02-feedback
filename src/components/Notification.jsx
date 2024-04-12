import { Component } from 'react';
export class Notification extends Component {
  render() {
    const { children, feedbackGiven, message } = this.props;

    return <div>{feedbackGiven ? children : <p>{message}</p>}</div>;
  }
}
