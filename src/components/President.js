import React, { Component } from "react";
import PropTypes from "prop-types";

export class President extends Component {
  render() {
    const { FullName, Party, Terms } = this.props.president;
    return (
      <div className="col-4">
        <ul>
          <li>{FullName}</li>
          <li>{Party}</li>
          <li>{Terms}</li>
        </ul>
      </div>
    );
  }
}

// PropTypes
President.propTypes = {
  president: PropTypes.object.isRequired
};

export default President;
