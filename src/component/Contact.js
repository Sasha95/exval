import React, { Component } from "react";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import marker from "../static/imges/marker.svg";
import { connect } from "react-redux";

class Contact extends Component {
  state = {
    windowWidth: 1366,
    windowHeight: 600,
    isOpen: false
  };
  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth - 18,
      windowHeight: window.innerHeight <= 600 ? window.innerHeight : 600
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  sendMessage = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["SendMessage"]);
  };

  render() {
    return (
      <div className="container-fluid p-0" style={{ position: "static" }}>
        <div style={{ position: "absolute" }}>
          <div className="ContactBox">
            <div id="ContactBox" style={{ padding: "35px" }}>
              <div className="TitleContact">Контакты</div>
              <div className="TelContact" style={{ paddingTop: "23px" }}>
                8 800 100-24-24
              </div>
              <div className="CallContact">для звонков из регионов России</div>
              <div className="TelContact" style={{ paddingTop: "20px" }}>
                +7 495 777-24-24
              </div>
              <div className="CallContact">
                для звонков из Москвы и из-за границы
              </div>
              <div className="TelContact" style={{ paddingTop: "20px" }}>
                info@corridor.com
              </div>
              <div
                className="TelContact"
                style={{ paddingTop: "19px", lineHeight: 1.38 }}
              >
                123100, Москва, Пресненская набережная, 12
              </div>
              <br id="ContactBoxBR" />
              <br id="ContactBoxBR" />
              <br id="ContactBoxBR" />
              <br id="ContactBoxBR" />
              <br />
              <button className="ButtonContact" onClick={this.sendMessage}>
                Написать сообщение
              </button>
            </div>
          </div>
        </div>
        <Map
          defaultCenter={[55.747343, 37.541099]}
          defaultZoom={17}
          width={this.state.windowWidth}
          height={this.state.windowHeight}
        >
          <Overlay anchor={[55.747343, 37.541099]}>
            <img src={marker} alt="marker" />
          </Overlay>
        </Map>
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
)(Contact);
