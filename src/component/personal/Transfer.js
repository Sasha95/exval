import React, { Component } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { connect } from "react-redux";

import arrowWithdrawal from "../../static/imges/personalImge/arrowWithdrawal.svg";
import userWithdrawal from "../../static/imges/personalImge/userWithdrawal.svg";
import cardWithdrawal from "../../static/imges/personalImge/cardWithdrawal.svg";
import checkWithdrawal from "../../static/imges/personalImge/checkWithdrawal.svg";
import { data } from "../../data/dataForDesctop";
import { transferDta } from "../../data/transferData";
import arrow_back from "../../static/imges/personalImge/arrow_back.svg";
import { Link } from "react-router-dom";
//#region
const Withdrawal = styled.div`
  font-size: 20px;
  font-weight: normal;
  font-style: Gravity-Book;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #000000;
  padding-top: 30px;
`;

const ButtonAdd = styled.button`
  width: 220px;
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
  cursor: pointer;
`;
const NumFont = styled.div`
  font-family: Gravity;
  font-style: Gravity-Book;
  font-size: 16px;
  font-weight: normal;
`;
const Descrip = NumFont.extend`
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.69;
`;
const MyDate = styled.div`
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
`;
const MyTime = MyDate.extend`
  font-weight: normal;
`;

const ShowRoutes = styled.div`
  font-family: Gravity;
  font-size: 14px;
  font-weight: normal;
  line-height: 2.14;
  color: #0c128f;
  font-style: Gravity-Regular;
  cursor: pointer;
`;
//#endregion

class Transfer extends Component {
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
        style={{
          borderRadius: "2px",
          border: "solid 1px #cbd0e8",
          backgroundColor: "#fff",
          maxWidth: "890px",
          height: "593px"
        }}
      >
        <div
          className="box"
          style={{
            color: "#0c128f",
            fontSize: "18px",
            opacity: "0.25"
          }}
        >
          <img src={arrow_back} alt="back" className="arrow_back" /> Рабочий
          стол
        </div>
        <div className="nomamiTitle">Необходимо добавить средства</div>
        <div className="nomanyBase">
          В данном разделе будет храниться информация о переводах.
        </div>
        <Withdrawal className="nomanyBase">
          Вывод средств в течение 72 часов с момента запроса
        </Withdrawal>
        <div className="row m-4">
          <div className="transferImg">
            <img src={userWithdrawal} alt="user" />
          </div>
          <div className="col">
            <NumFont>1. Личный кабинет</NumFont>
            <Descrip>
              Вывод средств, возможен <br /> из личного кабинета
            </Descrip>
          </div>

          <div className="transferImg" style={{ padding: "24px 20px" }}>
            <img src={cardWithdrawal} alt="credit-card" />
          </div>
          <div className="col">
            <NumFont>3. Куда выводить</NumFont>
            <Descrip>
              Укажите данные карты, на которую <br /> будут выводиться средства
            </Descrip>
          </div>
        </div>

        <div className="row m-4">
          <div className="transferImg" style={{ padding: "23px 20px" }}>
            <img
              src={arrowWithdrawal}
              alt="user"
              style={{ width: "40px", height: "34px" }}
            />
          </div>
          <div className="col">
            <NumFont>2. Вывести средства</NumFont>
            <Descrip>
              В личном кабинете нажмите
              <br />
              на кнопку «Вывести средства»
            </Descrip>
          </div>

          <div className="transferImg">
            <img
              src={checkWithdrawal}
              alt="credit-card"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="col">
            <NumFont>4. Завершить</NumFont>
            <Descrip>
              Средства поступят на указанную
              <br />
              карту, в течение 72 часов
            </Descrip>
          </div>
        </div>

        <div style={{ top: "508px", position: "absolute" }}>
          <button onClick={this.addFacilities} className="nomanyButton">
            Добавить средства
          </button>
        </div>
      </div>
    ) : (
      <div className="container-fluid box">
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
          <div className="col-md-auto px-0 centerScore " id="ButtonTrans">
            <ButtonAdd className="Funds" onClick={this.addFacilities}>
              Добавить средства
            </ButtonAdd>
          </div>
        </div>
        <hr />
        <div className="row p-4" style={{ fontSize: "20px" }}>
          История переводов
        </div>

        {transferDta.map((i, key) => (
          <div key={key} className="container-fluid p-0">
            <div className="row mx-3 align-items-center">
              <div className="col-3 p-0">
                <MyDate>{i["date"]}</MyDate>
                <MyTime>{i["time"]}</MyTime>
              </div>

              <div
                className="col-3 p-0"
                style={{
                  maxWidth: "40px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  border: "solid 1px #edf2f9",
                  borderRadius: "20px"
                }}
              >
                <img
                  src={arrow_back}
                  alt="income"
                  style={{
                    width: "16px",
                    height: "16px",
                    margin: "12px",
                    transform: i["sum"] < 0 ? "rotate(270deg)" : "rotate(90deg)"
                  }}
                />
              </div>
              <div className="col accountTransfer"> {i["action"]} </div>
              <div
                className="sumTransfer"
                style={
                  i["sum"] < 0 ? { color: "#ff9933" } : { color: "#18c310" }
                }
              >
                {i["sum"] < 0 ? "-" : "+"} {i["valute"]}{" "}
                {(Math.abs(i["sum"]) + "").replace(
                  /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                  "$1 "
                )}{" "}
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className="row justify-content-center">
          <ShowRoutes>
            <u>Показать больше операций</u>
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
)(Transfer);
