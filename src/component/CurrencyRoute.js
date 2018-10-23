import React, { Component } from "react";
import greenarrow from "../static/imges/greenarrow.svg";
import mangoarrow from "../static/imges/mangoarrow.svg";
import { data, result } from "../data/data";

const styl = {
  whiteSpace: "nowrap",
  display: "inline-block",
  overflowX: "auto"
};

export default class CurrencyRoute extends Component {
  state = {
    hover: false,
    windowWidth: 916,
    select: -1
  };
  hoverOn = e => {
    this.setState({ hover: true, select: Number(e.target.id) });
  };
  hoverOff = () => {
    this.setState({ hover: false, select: -1 });
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

  render() {
    return (
      <div className="container-fluid pr-0">
        <div
          className="container-fluid row p-0 currency horizScroll"
          style={this.state.windowWidth <= 915 ? styl : null}
        >
          {data.map(k => (
            <div
              style={{
                width: this.state.windowWidth <= 915 ? "150px" : "",
                paddingLeft: "5px"
              }}
              className="blockWrap cell col"
              key={k["id"]}
              id={k["id"]}
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}
            >
              <hr className="vertical" />
              {this.state.hover !== false && this.state.select === k["id"] ? (
                <div className="percent">
                  {k["count"] > 0 ? "+" + k["count"] : k["count"]} {k["valute"]}
                </div>
              ) : (
                <div
                  className={`percent ${
                    Number(k["percent"]) < 0 ? "recession" : ""
                  } 
              `}
                  id={k["id"]}
                >
                  {Number(k["percent"]) < 0 ? (
                    <span>
                      <img
                        alt="recession"
                        className="img-fluid"
                        src={mangoarrow}
                      />
                      {Math.abs(Number(k["percent"]))}%
                    </span>
                  ) : (
                    <span>
                      <img
                        alt="growth"
                        className="img-fluid"
                        src={greenarrow}
                      />
                      {Math.abs(Number(k["percent"]))}%
                    </span>
                  )}
                </div>
              )}

              <div className="bankname">{k["bankName"]}</div>
            </div>
          ))}
          {!this.props.isPersonal ? (
            <span>
              <div
                className="col pr-0"
                style={{ display: "inline-block", width: "150px" }}
              >
                <hr className="vertical" />
                <div className="percent">+{result["percent"]}%</div>
                <div className="bankname">
                  + {result["money"]} {result["valute"]} <br />
                  за {result["currentDay"]}
                </div>
              </div>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
