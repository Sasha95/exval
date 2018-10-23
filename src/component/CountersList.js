import React, { Component } from "react";
import arrowblue from "../static/imges/arrowblue.svg";
import { connect } from "react-redux";
import { getCounters } from "../actions/db";
import CountersListView from "./CounterListView";

class CountersList extends Component {
  state = {
    countContries: 3,
    maxCount: 0
  };

  arrowClick = event => {
    if (event.target.id === "right") {
      this.setState({
        countContries:
          this.state.countContries > this.state.maxCount - 3
            ? this.state.maxCount
            : this.state.countContries + 3
      });
    } else {
      this.setState({
        countContries:
          this.state.countContries - 3 <= 0 ? 3 : this.state.countContries - 3
      });
    }
  };
  async componentDidMount() {
    await this.props.getCnt();
  }
  async componentWillReceiveProps(nextProps) {
    this.setState({
      maxCount: await nextProps.testStore.getCountersFromServer[0].length
    });
    console.log(nextProps.testStore);
  }
  render() {
    const data = this.props.testStore.getCountersFromServer[0];

    if (data === undefined) {
      console.log("Loading ...");
      return <p>Loading ...</p>;
    }

    return (
      <div className="container-fluid back">
        <div className="row">
          <div
            className="col tit"
            style={{
              paddingTop: "50px",
              marginLeft: "15px"
            }}
          >
            Список стран
          </div>
          <div className="col-auto" style={{ paddingTop: "50px" }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="back"
                      src={arrowblue}
                      className="arrow"
                      id="left"
                      onClick={this.arrowClick}
                    />
                  </td>
                  <td>
                    <hr className="line" />
                  </td>
                  <td>
                    <img
                      alt="next"
                      src={arrowblue}
                      className="arrow"
                      id="right"
                      onClick={this.arrowClick}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="counterMarg row d-flex flex-nowrap horizScroll"
          style={{
            marginTop: "30px",
            marginLeft: "-40px",
            marginRight: "0px",
            width: "auto"
          }}
        >
          {<CountersListView data={data} number={this.state.countContries} />}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    getCnt: () => {
      dispatch(getCounters());
    }
  })
)(CountersList);
