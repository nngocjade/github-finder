import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // render is a function within class
  //it is a lifecycle method that runs at a certain point when the component is loaded
  //it is required because it renders the output
  render() {
    return (
      <div className="App">
        <h1>Hello from React</h1>
      </div>
    );
  }
}

export default App;
