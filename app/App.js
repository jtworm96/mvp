import React, {Component} from 'react';
import './style.sass';
import axios from 'axios';
import Maps from './components/map.js'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }

  render () {
    return (
      <div className='app'>
        <h1>Parent.io</h1>
        <div id='map'>
          <Maps/>
        </div>
      </div>
    );
  }
};

export default App;