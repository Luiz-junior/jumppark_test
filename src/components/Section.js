import React, { Component } from 'react';

// import { Container } from './styles';

export default class components extends Component {
  render() {
    return <div className="list-container"> { this.props.children } </div>
  }
}
