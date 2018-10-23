import React, { Component } from "react";
import styled from "styled-components";

const dollar = () => {
  return Math.random().toFixed(1) * 150;
};

const percent = () => {
  return Math.random().toFixed(2) * 2;
};

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from)).toFixed(fixed) * 1;
}

const test = [0, 0, 0, 0, 0];

const Head = styled.div`
  font-weight: bold;
  text-align: center;
`;

export default class ValuteCorridor extends Component {
  state = {
    elementWidth: 0,
    elementHeight: 0,
    animatedClass: ""
  };

  componentDidMount() {
    this.setState({
      elementWidth: this.headerRef.clientWidth,
      elementHeight: this.headerRef.clientHeight
    });
    setTimeout(
      () =>
        this.setState({
          animatedClass: "animated"
        }),
      0
    );
  }

  render() {
    const Num = props => (
      <div
        style={{
          fontSize: `60px`, //60px   30px
          color: "#ffffff",
          opacity: "0.5", //0.5   0.25
          marginLeft: props.elementWidth,
          marginTop: props.elementHeight,
          position: "absolute",
          zIndex: 11
        }}
      >
        +$
        {dollar()}
      </div>
    );

    const Num1 = props => (
      <div
        style={{
          fontSize: "36px",
          color: "#ffffff",
          opacity: "0.25",
          marginLeft: props.elementWidth,
          marginTop: props.elementHeight,
          position: "absolute",
          zIndex: 11
        }}
      >
        +{percent()}%
      </div>
    );

    return (
      <div className=" mx-0" style={{ pointerEvents: "none" }}>
        {test.map((k, i) => (
          <div className={`animated-tag ${this.state.animatedClass}`} key={i}>
            <Num
              className="mx-0"
              elementWidth={getRandomInRange(
                80,
                this.state.elementWidth - 80,
                2
              )}
              elementHeight={getRandomInRange(
                0,
                this.state.elementHeight - 80,
                2
              )}
            />

            <Num1
              className="mx-0"
              elementWidth={getRandomInRange(
                80,
                this.state.elementWidth - 80,
                2
              )}
              elementHeight={getRandomInRange(
                0,
                this.state.elementHeight - 80,
                2
              )}
            />
          </div>
        ))}
        <header ref={element => (this.headerRef = element)} className="header ">
          <Head className="text-title">
            В холле финансового мира <br />
            мы тихо зарабатываем деньги!
          </Head>
          <Head className="head-content">
            Инвестиционная программа, основанная на арбитражной <br />
            прибыли с использованием валютных коридоров.
          </Head>
        </header>
      </div>
    );
  }
}
