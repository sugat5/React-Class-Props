import { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <h1>Student {this.props.name}</h1>
        <h3 style={{ backgroundColor: "lightpink" }}>{this.props.email}</h3>
      </div>
    );
  }
}
