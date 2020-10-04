import React, { Component, Fragment } from "react";
import { foo } from "../../../validation/test";
import "./App.css";


const App = () => {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    foo();

    return <h1>Hello Stack Overflow Community....</h1>;
  }
}

export default App;
