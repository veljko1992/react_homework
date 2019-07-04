import React, { Component } from "react";
import President from "./President";
import axios from "axios";

import './Presidents.css';

class Presidents extends Component {
  state = {
    presidents: [],
    loader: true
  };


  componentDidMount() {
    axios
      .get(
        "https://mysafeinfo.com/api/data?list=presidents&format=json&abbreviate=false&case=default&token=hxIfQgYLxyhbFyfR4pDwH0npvOaGspTd"
      )
      .then(res => {
        this.setState({ loader:false,presidents: res.data })
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{paddingTop: '40px'}}>
        <div className="row">
        {this.state.loader ? <div className="Loader" /> : ""}
          {this.state.presidents.map(president => (
            <President key={president.ID} president={president} />
          ))}
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Presidents;
