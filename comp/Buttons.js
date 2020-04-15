import React from "react";
import PropTypes from "prop-types";
require('../style.css');
export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
     wide: PropTypes.bool,
    clickHandler: PropTypes.func,
    random: PropTypes.integer,
  };
  
  handleClick = () => {
    this.props.handleClick();
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick} value={}>{this.props.value}</button>
      </div>
    );
  }
}