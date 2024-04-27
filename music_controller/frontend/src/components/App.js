import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing React Code</h1>;
  }
}

const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(<App />);
