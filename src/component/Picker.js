import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/ru";

class Picker extends React.Component {
  months = {
    января: 0,
    февраля: 1,
    марта: 2,
    апреля: 3,
    мая: 4,
    июня: 5,
    июля: 6,
    августа: 7,
    сентября: 8,
    октября: 9,
    ноября: 10,
    декабря: 11
  };

  state = {
    selectedDay: new Date(),
    selectedMonth: new Date().getMonth(),
    isClicked: false
  };

  handleDayClick = day => {
    this.setState({
      selectedDay: day,
      isClicked: !this.state.isClicked
    });

    var options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    this.props.sendData(
      day.toLocaleDateString("ru-RU", options).slice(0, -3),
      this.state.isClicked
    );
  };

  componentDidMount() {
    const str = this.props.selectDay.split(" ");
    this.setState({
      selectedDay: new Date(
        Number(str[2]),
        this.months[str[1]],
        Number(str[0])
      ),
      selectedMonth: this.months[str[1]]
    });
  }

  render() {
    const modifiersStyles = {
      birthday: {
        color: "red",
        backgroundColor: "#0c128f"
      }
    };
    return (
      <DayPicker
        month={new Date(new Date().getFullYear(), this.state.selectedMonth)}
        modifiersStyles={modifiersStyles}
        locale="ru"
        localeUtils={MomentLocaleUtils}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
      />
    );
  }
}

export default Picker;
