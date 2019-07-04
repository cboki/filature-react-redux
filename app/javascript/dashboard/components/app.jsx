import React from 'react';

import Map from '../containers/map';
import Countdown from '../containers/countdown';
import MissionList from '../containers/mission_list';

const App = (props) => {
  return (
    <div className="parent">
      <div className="logo-container">
      </div>
      <div className="first-container">
        <Map />
      </div>
      <div className="second-container">
        <Countdown />
        <div className="score"></div>
        <MissionList />
      </div>
    </div>
  )
}

export default App;
