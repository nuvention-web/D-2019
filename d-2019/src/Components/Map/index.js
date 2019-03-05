import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 41.901890,
      lng: -87.646667
    },
    zoom: 11
  };

  render() {
    return (

      <div style={{ height: '40vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBK5xvqteFV88DDNh_p1fnrVuEleP9bTtQ'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.901890}
            lng={-87.646667}
            text={'Restaurant'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
