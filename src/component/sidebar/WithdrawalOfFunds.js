import React, { Component } from "react";
import "../../static/main.css";
import styled from "styled-components";
//#region
const Card = styled.div`
  max-width: 360px;
  height: 230px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #060fc8, #0c128f);
  box-shadow: 0 4px 4px 0 rgba(10, 14, 106, 0.1),
    0 8px 8px 0 rgba(10, 14, 106, 0.1), 0 16px 16px 0 rgba(10, 14, 106, 0.1),
    0 32px 32px 0 rgba(10, 14, 106, 0.1), 0 64px 64px 0 rgba(10, 14, 106, 0.1);
`;
const CVText = styled.div`
  opacity: 0.5;
  font-family: Gravity;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0c128f;
`;

const InputCard = styled.input`
  padding: 7px 10px 5px 10px;
  height: 34px;
  margin: 11px 0px 0px 0px;
  font-size: 14px;
`;

const InputAdd = InputCard.extend`
  max-width: 100px;
  height: 50px;
  paddingleft: 0px;
  margin: 0px;
`;

//#endregion
class WithdrawalOfFunds extends Component {
  render() {
    var title = this.props.title;

    return (
      <div className="sidebarCard">
        <div id="Title">{this.props.title}</div>
        <Card style={{ padding: "20px 30px 30px 30px" }}>
          <div style={{ color: "white" }}>БАНКОВСКАЯ КАРТА</div>
          <div className="row">
            <InputCard className="w-100" placeholder="Номер карты" />
            <InputCard placeholder="Номер владельца" />
            {title === "Вывод средств" ? (
              ""
            ) : (
              <input className="col InputMM" placeholder="ММ / ГГ" />
            )}
          </div>
        </Card>
        <form style={{ padding: "30px 0px 30px 0px" }}>
          {title === "Вывод средств" ? (
            ""
          ) : (
            <div style={{ paddingBottom: "30px" }}>
              <div className="Label">CVV / CVV2</div>
              <div className="row" style={{ paddingLeft: "15px" }}>
                <InputAdd />
                <CVText className="col">
                  Трех значный код (редко четырех) который нахдится на обратной
                  стороне карты.
                </CVText>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col pr-0 m-0">
              <span className="form-group">
                <div className="Label">Валюта</div>
                <button className="BtnValute"> ₽</button>
                <button className="BtnValute"> $</button>
                <button className="BtnValute"> €</button>
              </span>
            </div>
            <div className="col">
              <span className="form-group">
                <div className="Label">Сумма</div>
                <input className="InputSum" placeholder="10000" />
              </span>
            </div>
          </div>
        </form>
        <button className="Withdrawal">
          {title === "Вывод средств" ? "Вывести средства" : "Внести средства"}
        </button>
      </div>
    );
  }
}

export default WithdrawalOfFunds;
