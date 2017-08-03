import React, { Component } from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import LocationForm from './containers/LocationForm';
import MeetupList from './containers/MeetupList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationForm />
        <MeetupList />
      </div>
    );
  }
}

export default App;
