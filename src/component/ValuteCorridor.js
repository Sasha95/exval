import React, { Component } from "react";
import { withPolyglot } from "polyglot-react";

class ValuteCorridor extends Component {
  state = {
    windowWidth: undefined
  };

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    // const { polyglot } = this.props;
    return (
      <div className="grid-video">
        {/* <div>
          <h1>{polyglot.t("home.login")}</h1>
        </div> */}

        <div className="row align-items-center m-0 justify-content-center">
          <span className="col-md-4 pl-0">
            <div className="corridor valute">Валютный коридор</div>
            <div className="finin valute">
              Финансовый инструмент, который
              <br /> помогает заработать арбитражную
              <br /> прибыль на переводе денег и<br /> обмена валют в разных
              точках мира!
            </div>
          </span>
          <div className="col-md-8 pr-0 embed-responsive embed-responsive-16by9">
            <iframe
              title="description"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/pzD9zGcUNrw?rel=0&amp;showinfo=0"
            />
          </div>
        </div>
      </div>
    );
  }
}

ValuteCorridor = withPolyglot()(ValuteCorridor);
export default ValuteCorridor;
