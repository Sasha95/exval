import React, { Component } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Confidencial } from "./Confidencial";
import { Rules } from "./Rules";
import { Security } from "./Security";
import { Comission } from "./Comission";
import { ValuteCorridorInfo } from "./ValuteCorridorInfo";
import { ValuteArbitr } from "./ValuteArbitr";
import { ValuterbitrCor } from "./ValuterbitrCor";
//#region style
const Left = styled.div`
  // max-width: 290px;
  // max-height: 370px;
  // width: 290px;
  height: 370px;
  border-radius: 2px;
  background-color: #ffffff;
`;
const Right = Left.extend`
  height: auto;
  // max-width: 890px;
  min-width: 340px;
  margin: 0px 88px 15px 0px;
`;
const Text = styled.div`
  font-size: 16px;
  font-style: Gravity-Regular;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #0c128f;
  padding-left: 35px;
  margin-top: 20px;
  padding-right: 35px;
  cursor: pointer;
`;
const Title = Text.extend`
  font-size: 36px;
  font-weight: bold;
  color: #0c128f;
  font-family: Gravity;
`;
//#endregion
const data = [
  <Link
    id={0}
    style={{ color: "#0c128f" }}
    to="/information/confidencial"
    className="col-md-auto p-0"
  >
    Политика конфиденциальности
  </Link>,
  <Link
    id={1}
    style={{ color: "#0c128f" }}
    to="/information/rules"
    className="col-md-auto p-0"
  >
    Правила использования
  </Link>,
  <Link
    id={2}
    style={{ color: "#0c128f" }}
    to="/information/security"
    className="col-md-auto p-0"
  >
    Безопасность
  </Link>,
  <Link
    id={3}
    style={{ color: "#0c128f" }}
    to="/information/comission"
    className="col-md-auto p-0"
  >
    Комиссия
  </Link>,
  <Link
    id={4}
    style={{ color: "#0c128f" }}
    to="/information/valutecorridor"
    className="col-md-auto p-0"
  >
    Валютный коридор
  </Link>,
  <Link
    id={5}
    style={{ color: "#0c128f" }}
    to="/information/valutearbitr"
    className="col-md-auto p-0"
  >
    Валютный арбитраж
  </Link>,
  <Link
    id={6}
    style={{ color: "#0c128f" }}
    to="/information/valutearbitrcor"
    className="col-md-auto p-0"
  >
    Валютный арбитраж на основании коридоров
  </Link>
];

class InformationRouting extends Component {
  state = {
    selectedValue: 0
  };
  CheckHendler = event => {
    this.setState({ selectedValue: Number(event.target.id) });
  };

  selectID = name => {
    switch (name) {
      case "/information/confidencial":
        return 0;
      case "/information/rules":
        return 1;
      case "/information/security":
        return 2;
      case "/information/comission":
        return 3;
      case "/information/valutecorridor":
        return 4;
      case "/information/valutearbitr":
        return 5;
      case "/information/valutearbitrcor":
        return 6;
      default:
        return;
    }
  };

  componentDidMount() {
    this.setState({
      selectedValue: this.selectID(this.props.ownProps.location.pathname)
    });
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      selectedValue: this.selectID(nextState.location.pathname)
    });
  }

  render() {
    return (
      <div
        className="container-fluid information "
        style={{
          paddingLeft: "88px",
          backgroundColor: "#edf2f9"
        }}
      >
        <div
          className="row m-0"
          style={{ paddingTop: "60px", paddingBottom: "30px" }}
        >
          <Title className="p-0">{data[this.state.selectedValue]}</Title>
        </div>
        <div className="row mx-0">
          <Left className="col px-0 pt-2 leftWidth">
            {data.map((i, key) => (
              <Text
                style={{
                  textDecoration:
                    this.state.selectedValue === key ? "underline" : ""
                }}
                id={key}
                key={key}
                onClick={this.CheckHendler}
              >
                {i}
              </Text>
            ))}
          </Left>
          <Right
            className="col info-pad"
            style={{ padding: "41px 35px 0px 55px" }}
          >
            <div>
              <Route
                path="/information/confidencial"
                component={Confidencial}
              />
              <Route path="/information/rules" component={Rules} />
              <Route path="/information/security" component={Security} />
              <Route path="/information/comission" component={Comission} />
              <Route
                path="/information/valutecorridor"
                component={ValuteCorridorInfo}
              />
              <Route
                path="/information/valutearbitr"
                component={ValuteArbitr}
              />
              <Route
                path="/information/valutearbitrcor"
                component={ValuterbitrCor}
              />
            </div>
          </Right>
        </div>
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  testStore: state,
  ownProps
}))(InformationRouting);
