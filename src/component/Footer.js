import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../static/imges/logo.svg";
import envelope from "../static/imges/envelopewhite.svg";
import phone from "../static/imges/phonewhite.svg";

import american from "../static/imges/american-express-logo.svg";
import visa from "../static/imges/visa-pay-logo.svg";
import yandex from "../static/imges/yandex-pay-logo.svg";
import webmoney from "../static/imges/webmoney-paying-logo.svg";
import paypal from "../static/imges/paypal-logo.svg";
import master from "../static/imges/master-card-logo.svg";
//#region
const Span = styled.span`
  padding-left: 10px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const Cook = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
  padding-top: 50px;
  font-family: Gravity-Book;
`;
const Foot = styled.div`
  font-family: Gravity-Regular;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.14;
  letter-spacing: normal;
  color: #ffffff;
`;

//#endregion

const soc = () => {
  return (
    <span className="navbar-text py-0">
      <span className="telegram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="2 0 18 20"
        >
          <path d="M.353 8.35l4.609 1.72 1.783 5.736a.542.542 0 0 0 .862.26l2.569-2.095c.27-.219.653-.23.934-.026l4.633 3.364c.32.232.771.057.851-.328L19.988.655a.543.543 0 0 0-.727-.618L.348 7.333A.544.544 0 0 0 .353 8.35zm6.105.804l9.006-5.547c.162-.1.329.12.19.248l-7.433 6.91a1.54 1.54 0 0 0-.478.922l-.253 1.876c-.033.25-.385.275-.454.033l-.974-3.422a.907.907 0 0 1 .396-1.02z" />
        </svg>
      </span>
      <span className="twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 18 20"
        >
          <path d="M20 1.922a8.193 8.193 0 0 1-2.356.646A4.12 4.12 0 0 0 19.448.3a8.271 8.271 0 0 1-2.607.996 4.103 4.103 0 0 0-6.991 3.74A11.648 11.648 0 0 1 1.392.75 4.072 4.072 0 0 0 .84 2.812a4.1 4.1 0 0 0 1.824 3.414 4.103 4.103 0 0 1-1.858-.515v.052a4.107 4.107 0 0 0 3.29 4.023 4.156 4.156 0 0 1-1.08.143c-.266 0-.522-.026-.773-.076a4.105 4.105 0 0 0 3.832 2.85 8.232 8.232 0 0 1-5.095 1.753A8.72 8.72 0 0 1 0 14.4a11.597 11.597 0 0 0 6.289 1.846c7.547 0 11.673-6.252 11.673-11.673l-.014-.531A8.193 8.193 0 0 0 20 1.922z" />
        </svg>
      </span>
      <span className="facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="-3 0 18 20"
        >
          <path d="M10.406.004L7.812 0C4.9 0 3.016 1.932 3.016 4.922v2.27H.408A.408.408 0 0 0 0 7.598v3.289c0 .225.183.407.408.407h2.608v8.297c0 .226.182.408.407.408h3.403a.408.408 0 0 0 .407-.408v-8.297h3.05a.408.408 0 0 0 .407-.407l.002-3.289a.408.408 0 0 0-.409-.408h-3.05V5.268c0-.925.22-1.394 1.425-1.394l1.747-.001a.408.408 0 0 0 .408-.408V.412a.408.408 0 0 0-.407-.408z" />
        </svg>
      </span>
    </span>
  );
};

class Footer extends Component {
  state = {
    windowWidth: false
  };
  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth <= 638 ? true : false
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
    return (
      <div className="container-fluid bac">
        <nav
          className="px-0 navbar navbar-expand-md"
          style={{ paddingTop: "64px" }}
        >
          <Link className="navbar-brand footerLogo" to="/">
            <div className="img.logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
          </Link>

          <span className="d-md-none pb-3">{soc()}</span>
          <div
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="true"
            aria-label="Toggle navigation"
            className="navbar-collapse collapse show"
          >
            <ul className="navbar-nav mr-auto px-0">
              <li className="nav-item active">
                <div
                  className="d-flex align-items-center pt-3"
                  style={{ paddingRight: "20px" }}
                >
                  <img src={envelope} alt="envelope" />
                  <Span>info@corridor.com </Span>
                </div>
              </li>
              <li className="nav-item">
                <div className="d-flex align-items-center py-3">
                  <img src={phone} alt="phone" />
                  <Span>+7 499 586-10-25 </Span>
                </div>
              </li>
            </ul>
            <span className="d-none d-md-block ">{soc()}</span>
          </div>
        </nav>

        <hr
          style={{
            backgroundColor: "#ffffff",
            opacity: "0.15",
            marginTop: "50px",
            marginBottom: "30px"
          }}
        />

        <div className="row">
          <Link to="/information/confidencial" className="col-md-auto linkText">
            Политика конфиденциальности
          </Link>
          <Link to="/information/rules" className="col-md-auto linkText">
            Правила использования
          </Link>
          <Link to="/information/security" className="col-md-auto linkText">
            Безопасность
          </Link>
          <Link to="/information/comission" className="col-md-auto linkText">
            Комиссия
          </Link>
          <Link to="/contact" className="col-md-auto linkText">
            Контакты
          </Link>
        </div>
        <div className="row pb-5">
          <div className="col">
            <Cook>
              ИП «Коридор» использует файлы «cookie», с целью персонализации
              сервисов и повышения удобства пользования веб-сайтом. «Cookie»
              представляют собой небольшие файлы, содержащие информацию о
              предыдущих посещениях веб-сайта. Если вы не хотите использовать
              файлы «cookie», измените настройки браузера.
            </Cook>
          </div>
        </div>
        {this.state.windowWidth ? (
          <div className="col justify-content-start px-0 col-xl-offset-4">
            <Foot>©2018 ИП «Коридор»</Foot>
          </div>
        ) : (
          ""
        )}

        <div className="row px-0">
          {this.state.windowWidth ? (
            ""
          ) : (
            <div className="col justify-content-start pr-0 col-xl-offset-4">
              <Foot>©2018 ИП «Коридор»</Foot>
            </div>
          )}
          <div className="col-auto mb-2 justify-content-end">
            <img src={visa} alt="VISA" />
          </div>
          <div className="col-auto mb-2 justify-content-end">
            <img src={paypal} alt="paypal" />
          </div>
          <div className="col-auto mb-2 justify-content-end">
            <img src={master} alt="paypal" />
          </div>
          <div className="col-auto mb-2 justify-content-end">
            <img src={yandex} alt="yandex-money" />
          </div>
          <div className="col-auto mb-2 justify-content-end">
            <img src={webmoney} alt="webmoney" />
          </div>
          <div className="col-auto justify-content-end">
            <img src={american} alt="american-express" />
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
