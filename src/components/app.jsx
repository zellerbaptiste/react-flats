import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flatsData from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flatsData[0],
      flats: flatsData
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flatsData[index] });
  }

  center() {
    const { selectedFlat } = this.state;
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  }

  render () {
    const { selectedFlat, flats } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
              <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
};

export default App;