import React, { Component } from "react";

export class Button extends Component {
  handleClick() {
    const { disabled, onClick } = this.props;
    if (onClick && !disabled) this.props.onClick();
  }

  render() {
    //let cssButtonClass = this.props.disabled ? "button disabled" : "button";
    let cssButtonClass;

    if (this.props.kind === "number") {
      cssButtonClass = "button";
    } else if (this.props.kind === "operating") {
      cssButtonClass = "button operating";
    } else if (this.props.kind === "icos") {
      cssButtonClass = "button icos";
    }

    return (
      <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
        {this.props.display}
      </div>
    );
  }
}
