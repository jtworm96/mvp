import React, {Component} from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }

  render () {
    return (
      <>
        <Map
            google = {this.props.google}
            zoom = {14}
            style = {{width: '100%', height: '95%'}}
            initialCenter = {{ lat: 30.27127, lng: -97.74103}}
          />
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ'
})(Maps);
