import React from "react";
import PropTypes from "prop-types";
require('../style.css');
export default class Button extends React.Component {
  render() {
    const className = [
      "component-input",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <input type="text" inputProps={{ 'aria-label': 'description' }}></input>
      </div>
    );
  }
}