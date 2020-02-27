import React, {Component} from 'react';
import './style.sass';
import axios from 'axios';
import Maps from './components/map.js'
import Header from './components/header.js'
import InfoCard from './components/imformationCard.js'

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {}
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      this.setState({
        lat: crd.latitude,
        lng: crd.longitude,
      }, () => {
        this.forceUpdate();
      })
    })
  }

  render () {
    if (!this.state.lat) {
      return (
        <>
          <Header/>
          <div>loading</div>
        </>
      );
    } else {
      return (
        <div className='app'>
          <Header/>
          <Maps state={this.state}/>
          {/* map over info brought in to create the info cards */}
        </div>
      );
    }
  }
};

export default App;