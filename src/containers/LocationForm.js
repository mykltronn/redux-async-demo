import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLocation} from "../actions";

class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        }
    }

    componentWillMount = () => {
      this.setState({location: "Durham, NC"}, function () {
        this.props.changeLocation(this.state.location);
      })
    }

    updateLocation = (event) => {
        this.setState({location: event.target.value});
    }

    changeLocation = (event) => {
        event.preventDefault();
        this.props.changeLocation(this.state.location);
    }

    render() {
        return (
            <div className="LocationForm">
                <form onSubmit={this.changeLocation}>
                    <div className="input-group">
                        <input type="text" onChange={this.updateLocation} value={this.state.location}/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLocation: (locText) => dispatch(changeLocation(locText))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);
