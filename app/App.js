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
        axios.post('/data', {
            lat: this.state.lat,
            lng: this.state.lng
        })
        .then((data) => {
          this.setState({
            'data': data.data
          })
        })
        .catch((err) => {
          console.log(err);
        })
      })
    })
  }

  render () {
    if (!this.state.data) {
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
          <div id='infoboxes'>
          {
            this.state.data.map((data, i) => {
              return (
                <InfoCard data={data} key={i} value={i+1} />
              );
            })
          }
          </div>
        </div>
      );
    }
  }
};

export default App;