import React, { Component } from "react";
import logo from "../static/imges/logo.svg";
import envelope from "../static/imges/envelope.svg";
import phone from "../static/imges/phone.svg";
import user from "../static/imges/user.svg";
import navbaruser from "../static/imges/navbaruser.svg";
import userNav from "../static/imges/userNav.svg";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

import home from "../static/imges/personalImge/home.svg";
import credit from "../static/imges/personalImge/credit-card.svg";
import arrow from "../static/imges/personalImge/arrow.svg";
import settings from "../static/imges/personalImge/settings.svg";
import star from "../static/imges/personalImge/star.svg";
import { logoutUser } from "../actions/EntryAction";

//#region стили
const Info = styled.span`
  color: white;
`;

const ModalScore = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #0c128f;
  padding-bottom: 8px;
`;
const SubScore = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #0c128f;
  opacity: 0.25;
`;

const UserImg = {
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  width: "40px",
  height: "40px",
  padding: "0px",
  cursor: "pointer"
};

//#endregion

const select = () => {
  return (
    <span
      className="select"
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        paddingRight: "103px"
      }}
    >
      <select name="" id="input0" required="required" className="check-lang">
        <option value="RU">RU</option>
        <option value="EN">EN</option>
        <option value="DE">DE</option>
        <option value="FR">FR</option>
      </select>
    </span>
  );
};
class Navbar extends Component {
  state = {
    isOpen: false,
    showModal: false,
    onHover: -1
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  images = [home, credit, arrow, settings, star];
  links = [
    { name: "desktop", nameru: "Рабочий стол" },
    { name: "score", nameru: "Мой счет" },
    { name: "transfer", nameru: "Переводы" },
    { name: "private", nameru: "Личные данные" },
    { name: "referal", nameru: `Реферальная программа` }
  ];
  HoverLink = event => {
    this.setState({ onHover: Number(event.target.id) });
  };
  HoverLeave = () => {
    this.setState({ onHover: -1 });
  };

  render() {
    const {
      dispatch,
      isAuthenticated,
      errorMessage
    } = this.props.testStore.auth;
    return (
      <div className="container-fluid p-0">
        <ReactModal
          id="right"
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {isAuthenticated && (
            <div style={{ padding: "30px 40px 40px 40px" }}>
              <SubScore>На счету </SubScore>
              <ModalScore>
                {/* {data["valute"]} {data["score"]} */}
                will be valute and score{" "}
              </ModalScore>

              {this.links.map((link, key) => (
                <div key={key} className="modalText ">
                  <Link
                    id={key}
                    onClick={this.handleCloseModal}
                    action="REPLACE"
                    className="linkDecoration row"
                    to={`/personal/` + link["name"]}
                  >
                    {key === this.state.onHover ? (
                      <span className="col-2">
                        <img id={key} alt="" src={this.images[key]} />
                      </span>
                    ) : (
                      ""
                    )}
                    <span
                      className="col-10"
                      id={key}
                      onMouseEnter={this.HoverLink}
                      onMouseLeave={this.HoverLeave}
                    >
                      {link["nameru"]}
                    </span>
                  </Link>
                </div>
              ))}

              <div
                className="linkDecoration"
                style={{ paddingTop: "31px" }}
                id="exit"
                onClick={() => {
                  this.props.logout();
                  this.handleCloseModal();
                }}
              >
                Выйти
              </div>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <div className="d-flex justify-content-center">
                <button
                  className="mb-0 BtnEnter "
                  style={{
                    width: "160px",
                    opacity: 1
                  }}
                  onClick={this.entryHandler}
                >
                  Вход
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <button className="BtnRegistration" onClick={this.OpenSideBar}>
                  <img alt="registration" src={user} className="user pr-2" />
                  Регистрация
                </button>
              </div>
            </div>
          )}
        </ReactModal>
        <nav className="navbar navbar-expand-lg px-0">
          <Link
            className="navbar-brand log mr-auto"
            to="/"
            style={{ paddingLeft: "103px" }}
          >
            <div className="img.logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
          </Link>
          <span className=" navbar-nav pr-0" style={{ paddingRight: "103px" }}>
            <span
              className="d-none d-lg-block mr-4"
              id="mail"
              style={{
                marginTop: "31px",
                marginBottom: "31px"
              }}
            >
              <Info>
                <img className="pr-2" src={envelope} alt="mail" />{" "}
                info@corridor.com
              </Info>
            </span>
            <span
              className="d-none d-lg-block mr-5"
              id="phone"
              style={{
                marginTop: "31px",
                marginBottom: "31px"
              }}
            >
              <Info>
                <img className="pr-2" src={phone} alt="phone" />
                +7 499 586-10-25
              </Info>
            </span>
            {isAuthenticated && (
              <span
                className="d-flex align-items-center navbarImg"
                style={{ cursor: "pointer" }}
              >
                <span
                  className="d-none d-sm-none d-md-block d-lg-block"
                  onClick={this.handleOpenModal}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    padding: "12px 17px 17px 17px"
                  }}
                >
                  <img src={navbaruser} alt="user" />
                </span>
                <span
                  className="col-auto"
                  onClick={this.handleOpenModal}
                  style={{
                    paddingLeft: "15px",
                    color: "white"
                  }}
                >
                  <span
                    className="d-none d-sm-none d-md-block d-lg-block"
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                  >
                    will be name
                    {/* {data["name"]} */}
                  </span>
                  <div
                    className="d-none d-sm-none d-md-block d-lg-block"
                    style={{
                      fontFamily: "Gravity-Regular",
                      fontSize: "15px",
                      fontWeight: "normal"
                    }}
                  >
                    will be valute and score
                    {/* {data["valute"]}
                    {data["score"]} */}
                  </div>
                </span>
                <span className="spanNav d-none d-sm-none d-md-block d-lg-block">
                  {select()}
                </span>
              </span>
            )}
            {!isAuthenticated && (
              <span className="d-none d-md-none d-md-block d-lg-block">
                <span className="mx-2 ml-3">
                  <button className="BtnEnter" onClick={this.entryHandler}>
                    Вход
                  </button>
                </span>
                <span className="mr-4">
                  <button
                    className="BtnRegistration"
                    onClick={this.OpenSideBar}
                  >
                    <img alt="registration" src={user} className="user pr-2" />
                    Регистрация
                  </button>
                </span>
                {select()}
              </span>
            )}

            <span
              className="d-sm-block d-md-none d-lg-none "
              style={{ paddingRight: "10px" }}
            >
              {select()}
              <span
                className="btn-group"
                style={UserImg}
                onClick={this.handleOpenModal}
              >
                <img
                  alt="user"
                  style={{
                    padding: "12px"
                  }}
                  src={userNav}
                />
              </span>
            </span>
          </span>
        </nav>
      </div>
    );
  }
  OpenSideBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Registation"]);
  };
  entryHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Entry"]);
  };
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
    logout: () => {
      dispatch(logoutUser());
    },
    componentForSidebar: component => {
      dispatch({ type: "TRANSFER_COMPONENT", payload: component });
    }
  })
)(Navbar);
