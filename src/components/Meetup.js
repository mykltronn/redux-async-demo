import React, {Component} from 'react';
import moment from 'moment';

class Meetup extends Component {
  render() {
    const { name, time, link, group } = this.props.meetup;
    return (
      <div className="Meetup">
        <div>
          <a className="text-bold" href={link}>{name}</a> - {group.name}
        </div>
        <div>
          <time dateTime={moment(time).format()}>
            {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
          </time>
        </div>
      </div>
    )
  }
}

export default Meetup;
