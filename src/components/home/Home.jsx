import React, { Component } from 'react';
import './home.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      background: 'black'
    }
  }
  render() {
    return (
      <div id="home">
        Welcome Home.
      </div>
    );
  }
}

export default HomePage;