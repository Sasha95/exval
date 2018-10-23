import React, { Component } from "react";
import styled from "styled-components";
import { data } from "../../data/dataForDesctop";
import { score } from "../../data/dataForScore";
import CurrencyRoute from "../CurrencyRoute";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import arrow_back from "../../static/imges/personalImge/arrow_back.svg";
import { Link } from "react-router-dom";
//#region
const ButtonAdd = styled.button`
  min-width: 220px;
  height: 50px;
  border-radius: 2px;
  background-color: #0c128f;
  color: white;
  border: none;
  margin: 0;
  cursor: pointer;
`;

const ButtonToday = ButtonAdd.extend`
  border: solid 1px #cbd0e8;
  background-color: #ffffff;
  color: #0c128f;
  font-weight: bold;
`;

const Income = styled.span`
  font-size: 24px;
  color: #0c128f;
  font-weight: bold;
  font-style: Gravity-Bold;
`;

const ShowRoutes = styled.div`
  font-family: Gravity;
  font-size: 14px;
  font-weight: normal;
  line-height: 2.14;
  color: #0c128f;
  font-style: Gravity-Regular;
`;

//#endregion

class Score extends Component {
  state = {
    isOpen: false
  };
  withdrawalOfFunds = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["withdrawalOfFunds"]);
  };
  addFacilities = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["AddFacilities"]);
  };

  render() {
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
        <Link
          id={0}
          to={"/personal/desktop"}
          className="linkDecoration backDesktop"
          action="REPLACE"
        >
          <img src={arrow_back} alt="back" className="arrow_back" /> Рабочий
          стол
        </Link>
        <div className="nomamiTitle">Необходимо добавить средства</div>
        <div className="nomanyBase">
          В данном разделе вы сможете ознакомиться с деталями коридора, с
          процентами дохода и эквивалентом с долларах США.
        </div>
        <div style={{ top: "375px", position: "absolute" }}>
          <button className="nomanyButton" onClick={this.addFacilities}>
            Добавить средства
          </button>
        </div>
      </div>
    ) : (
      <div className="container-fluid ml-0 box">
        <div className="row p-0 m-0">
          <Link
            id={0}
            to={"/personal/desktop"}
            className="linkDecoration backDesktop"
            action="REPLACE"
          >
            <img src={arrow_back} alt="back" className="arrow_back" /> Рабочий
            стол
          </Link>
        </div>
        <div className="row pl-0 m-0 centerScore">
          <div className="smallInfo " id="ButtonTrans">
            Мой счет
          </div>
        </div>
        <div className="row p-0 m-0 ">
          <div
            className="col pl-0 centerScore"
            id="ButtonTrans"
            style={{ whiteSpace: "nowrap" }}
          >
            <span className="scoreText">{data["valute"]} </span>
            <span className="scoreText">
              {(data["score"] + "").replace(
                /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                "$1 "
              )}
            </span>
          </div>
          <div className="col-md-auto px-0 mr-2 centerScore" id="ButtonTrans">
            <ButtonToday className="FundsW" onClick={this.withdrawalOfFunds}>
              Вывод средств
            </ButtonToday>
          </div>
          <div className="col-md-auto px-0 centerScore" id="ButtonTrans">
            <ButtonAdd className="Funds" onClick={this.addFacilities}>
              Добавить средства
            </ButtonAdd>
          </div>
        </div>
        <hr />
        <div className="row p-0 m-0">
          <div className="smallInfo">
            {score[0].map(i => (i["date"] ? i["date"] : ""))}
          </div>
        </div>
        <Income>
          {score[0].map(
            (i, key) =>
              i["income"] ? (
                <span key={key}>
                  {" "}
                  +{i["valute"]}{" "}
                  {(i["income"] + "").replace(
                    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                    "$1 "
                  )}
                </span>
              ) : (
                ""
              )
          )}
        </Income>
        <div className="row">
          <div className="col">
            <CurrencyRoute isPersonal={true} />
          </div>
        </div>
        <div className="smallInfo">
          {score[1].map(i => (i["date"] ? i["date"] : ""))}
        </div>
        <Income>
          {score[1].map(
            (i, key) =>
              i["income"] ? (
                <span key={key}>
                  {" "}
                  +{i["valute"]}{" "}
                  {(i["income"] + "").replace(
                    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                    "$1 "
                  )}
                </span>
              ) : (
                ""
              )
          )}
        </Income>

        <div className="row">
          <div className="col">
            <CurrencyRoute isPersonal={true} />
          </div>
        </div>
        <div className="smallInfo">
          {score[1].map(i => (i["date"] ? i["date"] : ""))}
        </div>
        <div className="row justify-content-center">
          <ShowRoutes>
            <u>Показать больше маршрутов</u>
          </ShowRoutes>
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
)(Score);
