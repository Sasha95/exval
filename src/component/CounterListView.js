import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getBanksOfCounter, getCounters } from "../actions/db";

const Wraper = styled.div`
  border-radius: 2px;
  cursor: pointer;
  background-image: linear-gradient(to bottom, rgba(12, 18, 143, 0.5), #0c128f);
`;
class CountersListView extends Component {
  state = {
    isOpen: false
  };
  banksCounterHandler = event => {
    this.props.getBanks();

    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Banks", event.target.id]);
  };

  render() {
    const { data, number } = this.props;
    return data.map(
      (k, i) =>
        i >= number - 3 && i < number ? (
          <Wraper
            className="designimg"
            key={i}
            onClick={this.banksCounterHandler}
            style={{ marginLeft: "40px", overflow: "hidden" }}
          >
            <div className="imgblock3 ">
              <img
                className="countersImg"
                src={`${k.image}`}
                id={i}
                alt={k.country}
              />
              <span id={i} alt={k.country}>
                <p id={i} alt={k.country}>
                  {k.country}
                </p>
                <u id={i} alt={k.country}>
                  Список банков
                </u>
              </span>
            </div>
          </Wraper>
        ) : (
          ""
        )
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    getBanks: () => {
      dispatch(getBanksOfCounter());
    },
    onChangeState: isClicked => {
      dispatch({
        type: "RESET"
      });
      dispatch({
        type: "CHANGE_STATE",
        payload: isClicked
      });
    },
    componentForSidebar: component => {
      dispatch({ type: "TRANSFER_COMPONENT", payload: component });
    },
    getCnt: () => {
      dispatch(getCounters());
    }
  })
)(CountersListView);
