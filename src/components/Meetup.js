import React, {Component} from 'react';
import moment from 'moment';

class Meetup extends Component {
  render() {
    const { name, description, time, id } = this.props.meetup;
    return (
      <div className="Meetup">
        <p>{name}</p>
        <p>{moment(time).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    )
  }
}

export default Meetup;
