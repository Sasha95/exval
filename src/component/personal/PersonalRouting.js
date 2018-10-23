import React, { Component } from "react";
import styled from "styled-components";
import userDesctop from "../../static/imges/userDesctop.svg";
import home from "../../static/imges/personalImge/home.svg";
import arrow from "../../static/imges/personalImge/arrow.svg";
import credit from "../../static/imges/personalImge/credit-card.svg";
import settings from "../../static/imges/personalImge/settings.svg";
import star from "../../static/imges/personalImge/star.svg";
import { connect } from "react-redux";
import { getPersonalData } from "../../actions/db";
import { Link, Route } from "react-router-dom";
import Desktop from "./Desktop";
import Score from "./Score";
import Transfer from "./Transfer";
import Personal from "./Personal";
import Referal from "./Referal";
import { RulesFereralProgram } from "./RulesReferalProgram";

//#region стили
const Title = styled.div`
  font-family: Gravity;
  font-size: 36px;
  font-weight: bold;
  color: #0c128f;
  padding-top: 60px;
  padding-bottom: 30px;
`;

const RectangleDesctop = styled.div`
  width: 290px;
  height: 460px;
  border-radius: 2px;
  background-color: #ffffff;
`;

const BackgroundImage = styled.div`
  background-color: #0c128f;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding: 35px;
  margin-left: 95px;
`;
const Hr = styled.hr`
  width: 220px;
  height: 1px;
  opacity: 0.15;
  background-color: #0c128f;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const Text = styled.div`
 font-size: 16px;
 font-style: Gravity-Regular
 font-weight: normal;
 line-height: 1.25;
 letter-spacing: normal;
 color: #0c128f;
 cursor: pointer;
`;

//#endregion
class PersonalRouting extends Component {
  state = {
    curentSelect: -1
  };

  selectID = name => {
    switch (name) {
      case "/personal/desktop":
        return 0;
      case "/personal/score":
        return 1;
      case "/personal/transfer":
        return 2;
      case "/personal/private":
        return 3;
      case "/personal/referal":
        return 4;
      default:
        return;
    }
  };

  images = [home, credit, arrow, settings, star];
  links = [
    { name: "desktop", nameru: "Рабочий стол" },
    { name: "score", nameru: "Мой счет" },
    { name: "transfer", nameru: "Переводы" },
    { name: "private", nameru: "Личные данные" },
    { name: "referal", nameru: `Реферальная программа` }
  ];

  componentDidMount() {
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      curentSelect: this.selectID(nextProps.ownProps.location.pathname)
    });
  }

  render() {
    // console.log(this.props.testStore);
    // console.log(this.props.testStore);
    // const { ownProps } = this.props;
    // console.log("ownProps", this.props.ownProps);
    const date = [
      <Link
        id={0}
        to={"/personal/desktop"}
        className="linkDecoration"
        action="REPLACE"
      >
        Рабочий стол
      </Link>,
      <Link
        id={1}
        to={`/personal/score`}
        className="linkDecoration"
        action="REPLACE"
      >
        Мой счет
      </Link>,
      <Link
        id={2}
        to={`/personal/transfer`}
        className="linkDecoration"
        action="REPLACE"
      >
        Переводы
      </Link>,
      <Link
        id={3}
        to={`/personal/private`}
        className="linkDecoration"
        action="REPLACE"
      >
        Личные данные
      </Link>,
      <Link
        id={4}
        to={`/personal/referal`}
        className="linkDecoration"
        action="REPLACE"
      >
        Реферальная программа
      </Link>
    ];

    return (
      <div className="container-fluid p-0">
        <div
          className="mediaqueepad"
          style={{
            backgroundColor: "#edf2f9",
            paddingLeft: "103px",
            paddingRight: "88px",
            paddingBottom: "60px"
          }}
        >
          <div className="row p-0 m-0">
            <Title className="col">{date[this.state.curentSelect]}</Title>
          </div>
          <div
            className="row p-0 m-0"
            style={{
              display: "flex",
              displayDirection: "column",
              flexWrap: "nowrap"
            }}
          >
            <div
              style={{ marginRight: "10px" }}
              className="col-md-auto d-xl-block d-lg-block d-md-none d-sm-none d-xs-none d-none p-0"
            >
              <RectangleDesctop className="container-fluid">
                <div style={{ paddingTop: "35px" }}>
                  <BackgroundImage>
                    <img
                      style={{
                        width: "30px",
                        height: "30px"
                      }}
                      src={userDesctop}
                      alt="user"
                    />
                  </BackgroundImage>
                </div>
                <Text
                  style={{
                    paddingLeft: "35px",
                    paddingTop: "20px"
                  }}
                >
                  Александр <br /> Александрович
                </Text>
                <Hr />
                {this.links.map((link, key) => (
                  <div onClick={this.CheckHandle} key={key}>
                    <Link
                      id={key}
                      className="linkDecoration row px-5"
                      to={`/personal/` + link["name"]}
                      style={{
                        paddingTop: "20px"
                      }}
                    >
                      {key === this.state.curentSelect ? (
                        <div className="col-2 p-0">
                          <img id={key} alt="" src={this.images[key]} />
                        </div>
                      ) : (
                        ""
                      )}
                      <div id={key} className="col-10 p-0">
                        <Text key={key} id={key} onClick={this.CheckHandle}>
                          {link["nameru"]}
                        </Text>
                      </div>
                    </Link>
                  </div>
                ))}
              </RectangleDesctop>
            </div>
            <Route path="/personal/desktop" component={Desktop} />
            <Route path="/personal/score" component={Score} />
            <Route path="/personal/transfer" component={Transfer} />
            <Route path="/personal/private" component={Personal} />
            <Route path="/personal/referal" component={Referal} />
          </div>
          <Route path="/personal/referal" component={RulesFereralProgram} />
        </div>
      </div>
    );
  }

  CheckHandle = event => {
    this.setState({
      curentSelect: Number(event.target.id)
    });
  };
}

export default connect(
  (state, ownProps) => ({
    testStore: state,
    ownProps
  }),
  dispatch => ({
    getData: () => {
      dispatch(getPersonalData());
    }
  })
)(PersonalRouting);
