import './App.css';

import React, { Component } from 'react';

import ChildComponentApp from './03/ChildComponentApp';


class App extends Component {
  render() {
    return (
      // <div className='App'>
      //   <h1 className='title'>컴소화이팅!</h1>
      // </div>
        <ChildComponentApp/>
    );
  }
}

export default App;
