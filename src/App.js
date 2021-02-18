import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";

class App extends Component {
  foo = () => `Bars`;

  // render is a function within class
  //it is a lifecycle method that runs at a certain point when the component is loaded
  //it is required because it renders the output
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
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
