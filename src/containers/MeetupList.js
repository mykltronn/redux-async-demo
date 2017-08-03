import React, {Component} from 'react';
import {connect} from 'react-redux';
import Meetup from '../components/Meetup';

class MeetupList extends Component {
    render() {
        return (
            <div className="MeetupList">
                {this.props.meetups.map(meetup => <Meetup meetup={meetup}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {meetups: state.meetups}
}

export default connect(mapStateToProps)(MeetupList);
