import React from 'react';

const Mission = (props) => {
  return(
    <div className="mission">
      <div className="mission-name">{props.mission.name}</div>
    </div>
  )
};

export default Mission;
