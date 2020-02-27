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
        <Map id='map'
            google = {this.props.google}
            bootstrapURLKeys={{
              key:'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ',
              language: 'en',
            }}
            zoom = {14}
            yesIWantToUseGoogleMapApiInternals
            initialCenter = {{ lat: this.props.state.lat, lng: this.props.state.lng}}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            style = {{width: '90%', height: '70%', margin: 'auto'}}
        >
          <Marker id='marker'
            lat={this.props.state.lat} 
            lng={this.props.state.lng}
            text='1'
            color='blue'
          />
        </Map>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ'
})(Maps);
