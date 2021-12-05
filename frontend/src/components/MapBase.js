import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapBase extends Component{

    
    render() {
        const mapStyles = {
            width: '50%',
            height: '60%',
            border: 0,
            'margin-left':  '25%',
          };
        return (
            <div>
            <div className="titre">
            <h1>Vous pouvez nous retrouver pour le prochain tournoi à la localisation suivante : </h1>
            </div>
            <div className="map">
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{ lat: 48.8520256, lng: 2.2859175}}
            >
                <Marker position={{ lat: 48.8520256, lng: 2.2859175}}/>
                </Map>
                </div>
                </div>
        );
      }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIc-9Qw-Ime5dg4ADN5kCpgY-hbPkBwKQ'
  })(MapBase);
