import React, { Component } from "react";

class Display extends Component {
  render() {
    let cssDisplay;
    if (this.props.top) {
      cssDisplay = "topDisplay";
    } else {
      cssDisplay = "bottonDisplay";
    }

    return <div className={cssDisplay}>{this.props.value}</div>;
  }
}
export default Display;
