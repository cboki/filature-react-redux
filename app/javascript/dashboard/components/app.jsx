import React from 'react';

import Map from '../containers/map';
import Countdown from '../containers/countdown';
import MissionList from '../containers/mission_list';

const App = (props) => {
  return (
    <div className="parent">
      <Countdown />
      <Map />
      <MissionList />
    </div>
  )
}

export default App;
