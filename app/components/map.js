import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Maps extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
    
    }
  }

  render () {
    return (
      <div id='map'>
        <Map
            google = {this.props.google}
            zoom = {14}
            style = {{width: '100%', height: '95%'}}
            initialCenter = {{ lat: this.props.state.lat, lng: this.props.state.lng}}
          />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ'
})(Maps);
