import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import arrow_back from "../../static/imges/personalImge/arrow_back.svg";
import { refData } from "../../data/referalsData";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import copy from "../../static/imges/personalImge/copy.svg";

const styl = {
  whiteSpace: "nowrap",
  display: "inline-block",
  overflowX: "auto"
};

class Referal extends Component {
  state = {
    isOpen: false,
    windowWidth: undefined
  };
  copy = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["copy"]);
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  friends = [
    "Ваши друзья",
    "Доход от друзей",
    "Взнос друзей",
    "Доход от друзей в ожидании"
  ];

  render() {
    const url = "https://corridor.com/soc/sh-1?r=210211";
    const Line = styled.div`
      width: 1px;
      height: 110px;
      opacity: 0.15;
      background-color: #0c128f;
    `;
    return (
      <div
        className="container-fluid containerRef m-0"
        style={{ backgroundColor: "#fff" }}
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
        <div className="row my-3 mx-0">Пригласите друзей</div>
        <div
          className="col-xl-8 col-lg-9 col-md-10 col-sm-10 p-0 m-0"
          id="fontRef"
        >
          Копируйте и отправляйте реферальную ссылку друзьям. Вы получите 15% с
          каждой транзакции пользователя, зарегистрировавшегося по вашей ссылке.
        </div>

        <div className="container-fluid px-0 pb-5 pt-4">
          <form>
            <div className="form-group row m-0">
              <div className="input-group mb-3 col-md-7 p-0">
                <input
                  type="text"
                  className="form-control border-right-0"
                  placeholder={url}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    backgroundColor: "#edf2f9",
                    border: "solid 1px #cbd0e8",
                    height: "50px"
                  }}
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text border-left-0 rounded-right"
                    style={{ height: "50px", backgroundColor: "#edf2f9" }}
                  >
                    <CopyToClipboard text={url}>
                      <img
                        alt="copy link"
                        src={copy}
                        onClick={this.copy}
                        style={{ cursor: "pointer" }}
                      />
                    </CopyToClipboard>
                  </span>
                </div>
              </div>
              <div className="acquaint col">
                Перед началом работы ознакомтесь с общими
                <br />
                <u className="acquaint-rules">
                  правилами реферальной программы
                </u>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid pl-0 ">
          <div
            className="row container-fluid row mx-0 p-0 horizScroll"
            style={this.state.windowWidth <= 1083 ? styl : null}
          >
            <Line className="blockWrap" />
            <div
              className="col blockWrap"
              style={{ width: this.state.windowWidth <= 1083 ? "199px" : "" }}
            >
              <div className="friends">Ваши друзья</div>
              <br />
              <div className="counIncFriend">{refData["friends"]}</div>
            </div>
            <Line className="blockWrap" />
            <div
              className="col blockWrap"
              style={{ width: this.state.windowWidth <= 1083 ? "199px" : "" }}
            >
              <div className="friends">Доход от друзей</div>
              <br />
              <div className="counIncFriend">
                {refData["valute"]}
                {refData["incomeFriends"]}
              </div>
            </div>

            <Line className="blockWrap" />
            <div
              className="col blockWrap"
              style={{ width: this.state.windowWidth <= 1083 ? "199px" : "" }}
            >
              <div className="friends">Взнос друзей</div>
              <br />
              <div className="counIncFriend">
                {refData["valute"]}
                {refData["contributionFriends"]}
              </div>
            </div>

            <Line className="blockWrap" />
            <div
              className="col blockWrap"
              style={{ width: this.state.windowWidth <= 1083 ? "199px" : "" }}
            >
              <div className="friends">
                Доход от друзей
                <br /> в ожидании
              </div>
              <div className="counIncFriend" style={{ marginTop: "11px" }}>
                {refData["valute"]}
                {refData["contributionFriendsWait"]}
              </div>
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
)(Referal);
