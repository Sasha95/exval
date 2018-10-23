import React, { Component } from "react";
import ClickOutside from "react-click-outside";
import arrowblue from "../static/imges/arrowblue.svg";
import { dateAndName, WeekDay } from "./DayWork";
import CurrencyRoute from "./CurrencyRoute";
import arrow from "../static/imges/arrow.svg";

import Picker from "./Picker.js";

class ValuteCorridor extends Component {
  months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

  DAY = new Date();

  state = {
    open: false,
    currentMonthId: this.DAY.getMonth(),
    calendarOpen: false,
    windowWidth: undefined,
    minidate: this.DAY.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).slice(0, -3),
    currentDaySpan: 1,
    selectDay:
      WeekDay(
        this.DAY.getFullYear(),
        this.DAY.getMonth() + 1,
        this.DAY.getDay() + 1
      ) === "вс"
        ? this.DAY.getDay() + 2
        : WeekDay(
            this.DAY.getFullYear(),
            this.DAY.getMonth() + 1,
            this.DAY.getDay() + 1
          ) === "сб"
          ? this.DAY.getDay() + 3
          : this.DAY.getDay() + 1
  };
  handleResize = () => {
    if (window.innerWidth <= 991) {
      this.setState({
        windowWidth: window.innerWidth - 118
      });
    } else {
      this.setState({ windowWidth: 160 });
    }
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  getData = (val, opencalendar) => {
    this.setState({ minidate: val, calendarOpen: opencalendar });
  };

  render() {
    const { open } = this.state;

    const days = dateAndName(
      this.state.currentMonthId,
      this.state.currentDaySpan
    );
    const items = (
      <div
        className={` rounded-0 check-month head-text scrollable-menu dropdown-menu ${
          open ? "show" : ""
        }`}
        aria-labelledby="dropdownMenu2"
      >
        {this.months.map((number, i) => (
          <a
            className="dropdown-item selectText"
            key={i}
            id={i}
            onClick={this.checkMonth}
          >
            {number}
          </a>
        ))}
      </div>
    );

    // console.log(this.state.calendarOpen);
    return (
      <div className="prevconteiner ">
        <div className="corridor">Предыдущие коридоры</div>
        <div className="finin">
          Предыдущие маршруты принесли в среднем по 1,3% прибыли в день!
        </div>
        <div className="row calen m-0">
          <div className="col nopadding ">
            <div className="ValuteCorridor">
              <ClickOutside onClickOutside={this.hide}>
                <a onClick={this.toggle}>
                  <div
                    style={{
                      minWidth: "160px"
                    }}
                    className={`dropdown ${open ? "show" : ""}`}
                  >
                    <button
                      className="btn rounded-0 btn-secondary dropdown-toggle check-month head-text w-100 calendar"
                      type="button"
                      id="dropdownMenu2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      onClick={() => {
                        this.setState({
                          calendarOpen: !this.state.calendarOpen
                        });
                      }}
                    >
                      {this.state.windowWidth > 160
                        ? this.state.minidate
                        : this.months[this.state.currentMonthId]}
                      <img src={arrow} alt="" className="col-auto" />
                    </button>
                    {this.state.calendarOpen === true &&
                    this.state.windowWidth > 160 ? (
                      <div className="row" style={{ paddingLeft: "15px" }}>
                        <Picker
                          sendData={this.getData}
                          selectDay={this.state.minidate}
                        />
                      </div>
                    ) : null}
                  </div>
                </a>
                {open === true && this.state.windowWidth === 160 ? items : null}
              </ClickOutside>
            </div>
          </div>
          {Object.keys(days).map(key => (
            <div
              className={`col d-none d-lg-block text-center numberofweekSelect ${
                days[key][1] ? "weekend" : ""
              }
              
              ${Number(key) === this.state.selectDay ? "selectedItem" : ""}
              `}
              id={key}
              key={key}
              onClick={this.SelectDayHandler}
            >
              {key}
              <span
                className={`dayofweekSelect ${days[key][1] ? "weekend" : ""}`}
              >
                {days[key]}
              </span>
            </div>
          ))}

          <div
            className="numberofweekSelect mr-5 d-none d-lg-block "
            style={{
              opacity: 1,
              position: "relative",
              display: "inline-block"
            }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="back"
                      src={arrowblue}
                      className="arrow"
                      id="left"
                      onClick={this.arrowClick}
                    />
                  </td>
                  <td>
                    <hr className="line" />
                  </td>
                  <td>
                    <img
                      alt="next"
                      src={arrowblue}
                      className="arrow"
                      id="right"
                      onClick={this.arrowClick}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <CurrencyRoute />
        </div>

        <div className="description m-0">
          *Данный маршрут указывает доход при вложении в $1 000
        </div>
      </div>
    );
  }
  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  hide = () => {
    this.setState({ open: false });
  };

  checkMonth = event => {
    this.setState({
      currentMonthId: Number(event.currentTarget.id),
      currentDaySpan: 1,
      open: false,
      selectDay:
        WeekDay(
          this.DAY.getFullYear(),
          Number(event.currentTarget.id) + 1,
          1
        ) === "вс"
          ? 2
          : WeekDay(
              this.DAY.getFullYear(),
              Number(event.currentTarget.id) + 1,
              1
            ) === "сб"
            ? 3
            : 1
    });
  };

  SelectDayHandler = event => {
    if (String(event.currentTarget.className).indexOf("weekend") === -1) {
      this.setState({ selectDay: Number(event.currentTarget.id) });
    }
  };

  arrowClick = event => {
    let { currentDaySpan } = this.state;

    if (event.currentTarget.id === "left") {
      currentDaySpan -= 9;
      this.setState({
        selectDay: this.state.currentDaySpan - 9 + this.checkday(currentDaySpan)
      });
    }
    if (event.currentTarget.id === "right") {
      currentDaySpan += 9;
      this.setState({
        selectDay: this.state.currentDaySpan + 9 + this.checkday(currentDaySpan)
      });
    }

    if (currentDaySpan < 0) {
      currentDaySpan = 27;
      if (this.state.currentMonthId === 0) {
      } else {
        this.setState({
          currentMonthId: this.state.currentMonthId - 1,
          selectDay: currentDaySpan + this.checkday(currentDaySpan)
        });
      }
    } else if (currentDaySpan > 31) {
      currentDaySpan = 1;
      this.setState({ currentDaySpan: 1 });

      if (this.state.currentMonthId === 11) {
      } else {
        this.setState({
          currentMonthId: this.state.currentMonthId + 1,
          selectDay: 1 + this.checkday(currentDaySpan)
        });
      }
    }

    if (currentDaySpan === 0) {
      this.setState({
        selectDay: 1 + this.checkday(1)
      });
    }

    this.setState({ currentDaySpan: currentDaySpan });
  };

  checkday = day => {
    const dayofname = WeekDay(
      new Date().getFullYear(),
      this.state.currentMonthId + 1,
      day
    );

    switch (dayofname) {
      case "сб":
        return 2;
      case "вс":
        return 1;
      default:
        return 0;
    }
  };
}

export default ValuteCorridor;
