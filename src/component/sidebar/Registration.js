import React, { Component } from "react";
import { connect } from "react-redux";
import "../../static/main.css";
import { RegistrationUser } from "../../actions/Registration";
import { isEqual, omit } from "lodash";

import {
  FormWithConstraints,
  Input,
  FieldFeedbacks,
  Async,
  FieldFeedback
} from "react-form-with-constraints-bootstrap4";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const checkUsernameAvailability = async value => {
  console.log("checkUsernameAvailability");
  await sleep(1000);
  return !["john", "paul", "george", "ringo"].includes(value.toLowerCase());
};

class Registation extends Component {
  state = this.getInitialState();
  getInitialState() {
    return {
      isOpen: false,
      showModal: false,
      email: "",
      password: "",
      passwordConfirm: "",
      signUpButtonDisabled: false,
      resetButtonDisabled: true
    };
  }
  shouldDisableResetButton(state) {
    const omitList = ["signUpButtonDisabled", "resetButtonDisabled"];
    return (
      isEqual(omit(this.getInitialState(), omitList), omit(state, omitList)) &&
      !this.form.hasFeedbacks()
    );
  }

  handleChange = async e => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });

    await this.form.validateFields(target);

    this.setState(prevState => ({
      signUpButtonDisabled: !this.form.isValid(),
      resetButtonDisabled: this.shouldDisableResetButton(prevState)
    }));
  };

  handlePasswordChange = async e => {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });

    await this.form.validateFields(target, "passwordConfirm");

    this.setState(prevState => ({
      signUpButtonDisabled: !this.form.isValid(),
      resetButtonDisabled: this.shouldDisableResetButton(prevState)
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    await this.form.validateForm();
    const formIsValid = this.form.isValid();

    this.setState(prevState => ({
      signUpButtonDisabled: !formIsValid,
      resetButtonDisabled: this.shouldDisableResetButton(prevState)
    }));

    if (formIsValid) {
      alert(
        `Valid form\n\nthis.state =\n${JSON.stringify(this.state, null, 2)}`
      );
    }
  };

  handleReset = () => {
    this.setState(this.getInitialState());
    this.form.resetFields();
    this.setState({ resetButtonDisabled: true });
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
    this.props.componentForSidebar(["Entry"]);
  };
  registration = () => {
    // const email = this.refs.email;
    // const password = this.refs.password;
    // const creds = {
    //   email: email.value.trim(),
    //   password: password.value.trim()
    // };
    // this.props.regist(creds);
    // this.setState({ showModal: true });
    return false;
  };

  render() {
    const {
      email,
      password,
      passwordConfirm,
      signUpButtonDisabled,
      resetButtonDisabled
    } = this.state;

    return (
      <div>
        {this.registration() ? (
          <div>
            <div id="Title">Регистрация прошла успешно</div>
            <div>
              На указанный вами e-mail адрес, было отправлено письмо для
              подтверждения регистрационных данных.
            </div>
          </div>
        ) : (
          <FormWithConstraints
            ref={formWithConstraints => (this.form = formWithConstraints)}
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div id="Title">Регистрация</div>
            <div className="form-group">
              <label className="Label">E-mail</label>
              <Input
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                ref="email"
                required
                className="form-control"
              />

              <FieldFeedbacks onChange={this.val} for="email">
                <FieldFeedback when={value => value.length === 0}>
                  Заполните это поле.
                </FieldFeedback>
                <FieldFeedback
                  when={value =>
                    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                      value
                    )
                  }
                >
                  Невалидный email адрес
                </FieldFeedback>
                {/* <Async
                promise={checkUsernameAvailability}
                pending={<span style={{ display: "block" }}>...</span>}
                then={available =>
                  available ? (
                    <FieldFeedback key="1" info style={{ color: "#28a745" }}>
                      Username available
                    </FieldFeedback>
                  ) : (
                    <FieldFeedback key="2">
                      Username already taken, choose another
                    </FieldFeedback>
                  )
                }
              /> 
              <FieldFeedback when="valid">Looks good!</FieldFeedback>*/}
              </FieldFeedbacks>
            </div>
            <div className="form-group">
              <label className="Label">Пароль</label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={password => (this.password = password)}
                value={password}
                onChange={this.handlePasswordChange}
                required
                pattern=".{8,}"
                className="form-control"
              />
              <FieldFeedbacks for="password">
                <FieldFeedback when="valueMissing" />
                <FieldFeedback when="patternMismatch">
                  Должно быть не менее 8 символов
                </FieldFeedback>
                <FieldFeedback
                  when={value => !/\d/.test(value)}
                  warning
                  style={{ color: "#FFD700" }}
                >
                  <small>Желательно и цифры.</small>
                </FieldFeedback>
                <FieldFeedback
                  when={value => !/[a-z]/.test(value)}
                  warning
                  style={{ color: "#FFD700" }}
                >
                  <small>Желательно и малые буквы.</small>
                </FieldFeedback>
                <FieldFeedback
                  when={value => !/[A-Z]/.test(value)}
                  warning
                  style={{ color: "#FFD700" }}
                >
                  <small> Желательно и большие буквы.</small>
                </FieldFeedback>
                <FieldFeedback
                  when={value => !/\W/.test(value)}
                  warning
                  style={{ color: "#FFD700" }}
                >
                  <small> Желательно и спецсимволы буквы.</small>
                </FieldFeedback>
                {/* <FieldFeedback when="valid">Looks good!</FieldFeedback> */}
              </FieldFeedbacks>
            </div>
            <div className="form-group">
              <label className="Label">Повторите пароль</label>
              <Input
                type="password"
                id="password-confirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={this.handleChange}
                required
                className="form-control"
              />
              <FieldFeedbacks for="passwordConfirm">
                <FieldFeedback when="*" />
                <FieldFeedback when={value => value !== this.password.value}>
                  Пароли не совпадают
                </FieldFeedback>
                {/* <FieldFeedback when="valid">Looks good!</FieldFeedback> */}
              </FieldFeedbacks>
            </div>
            <div id="subText">
              Регистрируясь, вы соглашаетесь с <u>правилами пользования </u>{" "}
              сайтом и даете согласие на <u>обработку персональных данных</u>.
            </div>

            <div style={{ textAlign: "center" }} className="m-0">
              <div>Каптча</div>
              <div style={{ padding: "16px 0px 14px 0px" }}>
                <button
                  disabled={signUpButtonDisabled}
                  className="buttonRegistration"
                  onClick={this.registration}
                >
                  Зарегистрироваться
                </button>
              </div>
              <div style={{ fontSize: "14px", color: "#0c128f" }}>
                <u style={{ cursor: "pointer" }} onClick={this.OpenSideBar}>
                  Войти на сайт
                </u>
              </div>
            </div>
          </FormWithConstraints>
        )}
        {/* <div>
          {this.registration() ? (
            <div>
              <div id="Title">Регистрация прошла успешно</div>
              <div>
                На указанный вами e-mail адрес, было отправлено письмо для
                подтверждения регистрационных данных.
              </div>
            </div>
          ) : (
            <FormWithConstraints style={{ maxWidth: "360px" }}>
              <div id="Title">Регистрация</div>
              <div>
                <FieldFeedbacks onChange={this.val} for="email">
                  <FieldFeedback when="*">This is not an email</FieldFeedback>
                </FieldFeedbacks>
                <span className="Label">E-mail</span>
                <input
                  style={{ height: "50px" }}
                  type="email"
                  ref="email"
                  className="form-control"
                />
              </div>
              <div style={{ paddingBottom: "20px", paddingTop: "23px" }}>
                <span className="Label">Пароль</span>
                <input
                  style={{ height: "50px" }}
                  type="password"
                  ref="password"
                  required
                  className="form-control"
                />

                <FieldFeedbacks onChange={this.val} for="password">
                  <FieldFeedback
                    style={{ color: "red", position: "absolute" }}
                    when="*"
                  >
                    This is not an email
                  </FieldFeedback>
                </FieldFeedbacks>
              </div>
              <div id="subText">
                Регистрируясь, вы соглашаетесь с <u>правилами пользования </u>{" "}
                сайтом и даете согласие на <u>обработку персональных данных</u>.
              </div>
              <div style={{ textAlign: "center" }} className="m-0">
                <div>Каптча</div>
                <div style={{ padding: "16px 0px 14px 0px" }}>
                  <button
                    className="buttonRegistration"
                    onClick={this.registration}
                  >
                    Зарегистрироваться
                  </button>
                </div>
                <div style={{ fontSize: "14px", color: "#0c128f" }}>
                  <u style={{ cursor: "pointer" }} onClick={this.OpenSideBar}>
                    Войти на сайт
                  </u>
                </div>
              </div>
            </FormWithConstraints>
          )}
        </div> */}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    regist: creds => {
      dispatch(RegistrationUser(creds));
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
)(Registation);
