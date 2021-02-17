import React, { Component } from "react";
import "./App.css";

class App extends Component {
  foo = () => `Bars`;
  // render is a function within class
  //it is a lifecycle method that runs at a certain point when the component is loaded
  //it is required because it renders the output
  render() {
    const name = "Jade Nguyen";
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;

/**
 * JSX
 * under the hood is actually javascript
 *
 */
