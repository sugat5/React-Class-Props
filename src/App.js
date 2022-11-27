import "./styles.css";
import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sugat"
    };
  }
  render() {
    return (
      <div className="App">
        <Student name={this.state.name} />

        <button
          onClick={() =>
            this.setState({ name: "Pratap", email: "pratap@test.com" })
          }
        >
          Update Name
        </button>
      </div>
    );
  }
}
