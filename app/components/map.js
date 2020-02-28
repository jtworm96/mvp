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
            bootstrapURLKeys={{
              key:'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ',
              language: 'en',
            }}
            zoom = {12}
            yesIWantToUseGoogleMapApiInternals
            initialCenter = {{ lat: this.props.state.lat, lng: this.props.state.lng}}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            style = {{width: '100%', height: '100%', margin: 'auto'}}
        >
          {
            this.props.state.data.map((data, i) => {
              return (
                <Marker  
                  key={i}
                  position={{
                    lat: data.geometry.location.lat, 
                    lng: data.geometry.location.lng
                  }}
                  label={`${i+1}`}
                />
              );
            })
          }
        </Map>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ'
})(Maps);


                