import React, { Component } from 'react';

class App extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    // inline styling
    const styles = {
      color: "#FF8C00",
    };
    

    if (hours < 12) {
      timeOfDay = "morning";
      styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
      styles.color = "#2E0927";
    } else {
      timeOfDay = "night";
      styles.color = "#D90000";
    }

    return (
      <h1 style={styles}>Good {timeOfDay}!</h1>
    );
  }
}

export default App;
