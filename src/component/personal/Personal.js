import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import userDesctop from "../../static/imges/userDesctop.svg";
import arrow_back from "../../static/imges/personalImge/arrow_back.svg";
import { Link } from "react-router-dom";
//#region
const BackgroundImage = styled.div`
  background-color: #0c128f;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  padding: 35px;
  margin-left: 40px;
  margin-top: 20px;
`;
const Button = styled.button`
  margin: 48px;
  width: 160px;
  height: 50px;
  border-radius: 2px;
  background-color: #0c128f;
  color: #fff;
  border: none;
`;
const Label = styled.span`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: #0c128f;
`;
//#endregion

class Personal extends Component {
  render() {
    return (
      <div className="container-fluid pl-0" style={{ backgroundColor: "#fff" }}>
        <div className="row m-0 box">
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

        <div className="row p-0 mx-5" id="personalForm">
          Редкатирование фото
        </div>
        <div className="row">
          <div className="col-2-auto px-4 personalPhoto">
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
          <div
            className="col-3-auto mx-4"
            style={{ paddingTop: "50px", color: "#0c128f", fontSize: "14px" }}
          >
            <u>Загрузить фото</u>
          </div>
        </div>
        <div className="row p-0 mx-5 pt-5 pb-3" id="personalForm">
          Личные данные
        </div>
        <form>
          <div className="form-row mx-5" id="personalForm">
            <div className="form-group col-md-5 pl-0 pr-5">
              <Label>Имя</Label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-5 pr-5">
              <Label>Фамилия</Label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-md-5 pl-0 pr-5">
              <Label>Телефон</Label>
              <input type="phone" className="form-control" />
            </div>
            <div className="form-group col-md-5 pr-5">
              <Label>E-mail</Label>
              <input type="email" className="form-control" />
            </div>
          </div>
        </form>

        <div className="row mt-5 mx-5 pb-3" id="personalForm">
          Редактирование пароля
        </div>
        <form>
          <div className="form-row mx-5" id="personalForm">
            <div className="form-group col-md-5 pl-0 pr-5">
              <Label>Старый пароль</Label>
              <input type="password" className="form-control" />
            </div>
          </div>
        </form>
        <form>
          <div className="form-row mx-5" id="personalForm">
            <div className="form-group col-md-5 pl-0 pr-5">
              <Label>Новый пароль</Label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group col-md-5 pr-5">
              <Label>Повторить новый пароль</Label>
              <input type="password" className="form-control" />
            </div>
          </div>
        </form>
        <div className="row justify-content-center">
          <Button className="savePersonal"> Сохранить </Button>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(Personal);
