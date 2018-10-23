import React, { Component } from "react";
import info from "../../static/imges/personalImge/info-default.svg";
import { data } from "../../data/dataForDesctop";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { connect } from "react-redux";
//#region
const Income = styled.div`
  font-size: 24px;
  font-family: Gravity;
  font-style: Gravity-Bold;
  color: #0c128f;
  font-weight: bold;
`;

const ButtonAdd = styled.button`
  height: 50px;
  border-radius: 2px;
  background-color: #0c128f;
  color: white;
  border: none;
  margin: 0px;
  cursor: pointer;
`;
const ButtonToday = ButtonAdd.extend`
  margin: 0px;
  border: solid 1px #cbd0e8;
  background-color: #ffffff;
  color: #0c128f;
  font-weight: bold;
`;
//#endregion
class Desktop extends Component {
  state = {
    isOpen: false,
    windowWidth: false
  };
  addHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["AddFacilities"]);
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth <= 572 ? true : false
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const block1 = () => {
      return (
        <div className="box" style={{ maxHeight: "292px" }}>
          <div className="row">
            <div className="col inc" style={{ whiteSpace: "nowrap" }}>
              <div>
                <span className="smallInfo">
                  Заработок на сегодня
                  {"   "}
                </span>
                <img src={info} alt="подробная информация" />
              </div>
              <div
                className="TextTodayDesktop"
                style={{ position: "absolute" }}
              >
                {data["valute"]}
                {data["today"]}
              </div>
            </div>
            {this.state.windowWidth ? (
              ""
            ) : (
              <div style={{ paddingRight: "15px", textAlign: "right" }}>
                <span className="smallInfo">За месяц</span>
                <Income>
                  {data["valute"]}
                  {data["today"]}
                </Income>
              </div>
            )}
          </div>
          {this.state.windowWidth ? (
            ""
          ) : (
            <div>
              <div style={{ textAlign: "right" }}>
                <span className="smallInfo">За неделю</span>
                <Income>
                  {data["valute"]}
                  {data["week"]}
                </Income>
              </div>
              <div
                className="col px-0"
                style={{ paddingTop: "52px", maxWidth: "260px" }}
              >
                <ButtonToday>Сегодняшний коридор</ButtonToday>
              </div>
            </div>
          )}
          {this.state.windowWidth ? (
            <div className="container-fluid p-0">
              <div
                className="row justify-content-center align-items-center"
                style={{ paddingTop: "15%" }}
              >
                <div style={{ paddingRight: "15px", textAlign: "center" }}>
                  <span className="smallInfo">За месяц</span>
                  <Income>
                    {data["valute"]}
                    {data["today"]}
                  </Income>
                </div>
                <div>
                  <span className="smallInfo">За неделю</span>
                  <Income>
                    {data["valute"]}
                    {data["week"]}
                  </Income>
                </div>
              </div>
              <div className="row mx-0 justify-content-center align-items-center">
                <ButtonToday style={{ width: "260px" }}>
                  Сегодняшний коридор
                </ButtonToday>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    };
    const block2 = () => {
      return (
        <div
          style={{
            marginLeft: "10px"
          }}
          className={
            this.state.windowWidth ? "col m-0 px-0" : "col-4 p-0 w-100"
          }
        >
          <div
            className="box"
            style={{
              maxHeight: this.state.windowWidth ? "195px" : "290px"
            }}
          >
            <div className="smallInfo p-0">Мой счёт</div>
            <Income id="scoreDesctop">
              {data["valute"]}
              {(data["score"] + "").replace(
                /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                "$1 "
              )}
            </Income>
            <div
              className="addBut"
              style={{
                paddingTop: this.state.windowWidth ? "0px" : "95px",
                maxWidth: "260px"
              }}
            >
              <ButtonAdd className="col Funds" onClick={this.addHandler}>
                Добавить средства
              </ButtonAdd>
            </div>
          </div>
        </div>
      );
    };
    const block3 = () => {
      return (
        <div
          style={{ marginRight: "10px" }}
          className={
            this.state.windowWidth ? "col w-100 p-0 m-0" : "col w-100 p-0"
          }
        >
          <div className="box">
            <div className="text">
              <span className="smallInfo">Дохода с учетом комиссии </span>
              <img src={info} alt="подробная информация" /> {"  "}
              <Income style={{ fontSize: "40px" }}>
                {data["valute"]}
                {(data["commission"] + "").replace(
                  /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                  "$1 "
                )}
              </Income>
            </div>
          </div>
        </div>
      );
    };
    const block4 = () => {
      return (
        <div className={this.state.windowWidth ? "col p-0" : "col-4 p-0"}>
          <div className="box m-0">
            <span className="smallInfo">Реферальная программа</span>
            <Income style={{ fontSize: "40px" }}>
              {data["valute"]}
              {data["referal"]}
            </Income>
          </div>
        </div>
      );
    };

    return this.props.testStore.dataForDesktop[0] === undefined ? (
      <div className="mx-auto align-self-center">
        <ReactLoading
          type="spinningBubbles"
          color="#0c128f"
          height={150}
          width={150}
        />
      </div>
    ) : Number(this.props.testStore.dataForDesktop[0]) <= 0 ? (
      <div
        className="col w-100 p-0"
        style={{ borderRadius: "2px", border: "solid 1px #cbd0e8" }}
      >
        <div className="nomamiTitle">Необходимо добавить средства</div>
        <div className="nomanyBase">
          Здесь будет отображаться основная информация о состоянии счета и ваших
          доходах на актуальную дату.
        </div>
        <div style={{ top: "375px", position: "absolute" }}>
          <button className="nomanyButton" onClick={this.addHandler}>
            Добавить средства
          </button>
        </div>
      </div>
    ) : (
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            {this.state.windowWidth ? "" : block1()}
          </div>
          {this.state.windowWidth ? (
            <div className="w-100 px-0">{block1()}</div>
          ) : (
            ""
          )}
          {block2()}
        </div>
        {this.state.windowWidth ? (
          <div style={{ textAlign: "center" }}>
            <div className="row">{block3()}</div>
            <div className="row">{block4()}</div>
          </div>
        ) : (
          <div className="row">
            {block3()}
            {block4()}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
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
    }
  })
)(Desktop);
