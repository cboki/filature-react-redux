import React from 'react';
import Map from '../containers/map';
import Countdown from '../components/countdown';

const App = (props) => {
  return (
    <div>
      <Countdown startDate={JSON.parse(root.dataset.startTime).start_time} />
      <Map />
    </div>
  )
}

export default App;
