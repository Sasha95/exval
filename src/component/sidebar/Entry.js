import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/EntryAction";

class Entry extends Component {
  state = {
    showModal: false,
    isOpen: false
  };
  siteEntry = () => {
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = {
      email: email.value.trim(),
      password: password.value.trim()
    };
    this.props.getData(creds);
    this.setState({ showModal: true });
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  OpenSideBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Registation"]);
  };

  render() {
    return (
      <div id="Title">
        Вход
        <form style={{ maxWidth: "360px" }}>
          <div>
            <span className="Label">E-mail</span>
            <input
              style={{
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="email"
              ref="email"
              className="form-control"
            />
          </div>
          <div style={{ paddingBottom: "20px", paddingTop: "23px" }}>
            <span className="Label">Пароль</span>
            <span
              id="forgotMini"
              className="Label"
              style={{ paddingLeft: "120px" }}
            >
              Забыли пароль?
            </span>
            <input
              style={{
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="password"
              ref="password"
              className="form-control w-100"
            />
          </div>
        </form>
        <div>
          <div className="Label">
            <span id="forgot" style={{ paddingRight: "116px" }}>
              <u> Забыли пароль?</u>
            </span>
            <button className="btnEntry " onClick={this.siteEntry}>
              Войти
            </button>
            <div
              className="registarPad"
              style={{
                textAlign: "right",
                paddingTop: "10px",
                paddingRight: "15px"
              }}
            >
              <u style={{ cursor: "pointer" }} onClick={this.OpenSideBar}>
                Регистрация
              </u>
            </div>
          </div>
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
    getData: creds => {
      dispatch(loginUser(creds));
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
    }
  })
)(Entry);
