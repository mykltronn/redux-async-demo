import React, {Component} from 'react';
import {connect} from 'react-redux';
import Meetup from '../components/Meetup';

class MeetupList extends Component {
    render() {
        let meetups;
        if (this.props.loading > 0) {
            meetups = (<span className="loader loader-big"></span>);
        } else {
            meetups = this.props.meetups.map(meetup => <Meetup key={meetup.id} meetup={meetup}/>);
        }

        return (
            <div className="MeetupList">
                {meetups}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {meetups: state.meetups, loading: state.loading}
}

export default connect(mapStateToProps)(MeetupList);
