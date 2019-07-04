import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosition } from '../actions';

import Pin from '../components/pin'

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '100%',
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
    setInterval(this.locate, 10000);
  }

  locate = () => {
    this.props.fetchPosition(this.props.game.id);
  }

  render() {
    return (
      <div className="map">
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken={'pk.eyJ1IjoiY2Jva2kiLCJhIjoiY2p4ZWlmdDI0MGw0eTNwbno3OW5tcjF5YyJ9.Vd4lLeizSBl6Rg1YyQu7Qw'} >
          <Marker latitude={this.props.position.latitude} longitude={this.props.position.longitude} >
            <Pin size={20} />
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    position: state.position
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchPosition },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
