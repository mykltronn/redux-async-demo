import React, {Component} from 'react';
import moment from 'moment';

class Meetup extends Component {
  render() {
    const { name, description, time, id, link, group } = this.props.meetup;
    return (
      <div className="Meetup">
        <div class="text-bold">
          <a href={link}>{name}</a> - {group.name}
        </div>
        <div>
          <time datetime={moment(time).format()}>
            {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
          </time>
        </div>
      </div>
    )
  }
}

export default Meetup;
