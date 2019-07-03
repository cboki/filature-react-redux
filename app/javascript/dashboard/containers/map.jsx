import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosition } from '../actions';

import Pin from '../components/pin'

class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 400,
      latitude: 47.08259,
      longitude: 2.3963844891528527,
      zoom: 14
    }
  };

  onViewportChange = (viewport) => {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  componentDidMount = () => {
    setInterval(this.props.fetchPosition, 10000);
  }

  // fetchPosition = () => {
  //   fetch('https://api.wheretheiss.at/v1/satellites/25544')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         position: {
  //           latitude: data.latitude,
  //           longitude: data.latitude
  //         }
  //       });
  //       console.log(data)
  //     });
  // }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={this.onViewportChange}
        mapboxApiAccessToken={'pk.eyJ1IjoiY2Jva2kiLCJhIjoiY2p4ZWlmdDI0MGw0eTNwbno3OW5tcjF5YyJ9.Vd4lLeizSBl6Rg1YyQu7Qw'}
       >
        <Marker latitude={this.props.position.latitude} longitude={this.props.position.longitude} >
          <Pin size={20} />
        </Marker>
      </ReactMapGL>
    );
  }
}

function mapStateToProps(state) {
  return {
    position: state.position
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchPosition: fetchPosition },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
