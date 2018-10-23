import React, { Component } from "react";
import "../../static/main.css";

class SendMessage extends Component {
  render() {
    return (
      <div>
        <div id="Title" style={{ width: "385px" }}>
          {this.props.title}
        </div>
        <form>
          <div>
            <span className="Label">Ваше имя</span>
            <input
              style={{
                width: "360px",
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div style={{ paddingBottom: "20px", paddingTop: "23px" }}>
            <span className="Label">Телефон или e-mail</span>
            <input
              style={{
                width: "360px",
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <span className="Label">Ваше сообщение</span>
            <textarea
              style={{
                width: "360px",
                height: "100px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8",
                padding: "0 0 80px 0"
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div style={{ textAlign: "center", paddingRight: "25px" }}>
            <div> Каптча </div>
            <button className="btnEntry" style={{ width: "292px" }}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessage;
