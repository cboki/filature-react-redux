import React, { Component } from 'react';
import { connect } from 'react-redux';


class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      sec: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const timeLeft = this.calculateCountdown(this.props.game.start_time);
      timeLeft ? this.setState(timeLeft) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  calculateCountdown(startDate) {
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1);

    let diff = (Date.parse(endDate) - Date.parse(new Date())) / 1000;

    // clear countdown when time is reachec;
    if (diff <= 0) return false;

    const timeLeft = {
      min: 0,
      sec: 0
    };

    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }

    timeLeft.sec = diff;

    return timeLeft;
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    return(
      <div className="chrono">
        <div className="chrono-number">{this.addLeadingZeros(this.state.min)}:{this.addLeadingZeros(this.state.sec)}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

export default connect(mapStateToProps, null)(Countdown);
