import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMissions } from '../actions';

import Mission from '../components/mission';

class MissionList extends Component {

  componentDidMount() {
    this.refresher = setInterval(this.props.fetchMissions, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="missions">
      <h3 className="mission-title">Missions</h3>
        <div className="mission-list">
          {
            this.props.missions.map((mission) => {
              return <Mission key={mission.id} mission={mission} />
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    missions: state.missions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMissions },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
