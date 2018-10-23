import React, { Component } from "react";
import { connect } from "react-redux";
import "../../static/main.css";

import { date } from "../../data/counters";

class BanksOfCounter extends Component {
  render() {
    return (
      <div>
        <div id="Title">
          Список банков{" "}
          {date[[`${this.props.testStore.sidebarComponent[1]}`]]["name"]}
        </div>

        {date[`${this.props.testStore.sidebarComponent[1]}`]["list"].map(
          (i, key) => (
            <div
              key={key}
              style={{ color: "#0c128f", lineHeight: "2", fontSize: "15px" }}
            >
              <u> {i} </u>
            </div>
          )
        )}
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(BanksOfCounter);
