import React, { Component } from "react";
import arrowblue from "../static/imges/arrowblue.svg";
import { Link } from "react-router-dom";

export default class Information extends Component {
  render() {
    return (
      <div className="container-fluid inform">
        <div
          className="mx-0"
          id="inform"
          style={{
            paddingTop: "60px",
            paddingBottom: "60px"
          }}
        >
          <div className="row">
            <div className="col corridor">Терминология</div>
            <div className="col-auto d-flex align-items-end">
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

          <div
            className="row d-flex flex-nowrap horizScroll"
            style={{
              width: "auto",
              margin: "40px 0px",
              pdding: "0px"
            }}
          >
            <div className="card d-flex align-items-start flex-column flex-nowrap">
              <div className="description-info">Валютный коридор</div>
              <div className="descript-info">
                Валютный коридор – (англ. Currency <br /> corridor) это
                определенный диапазон, <br /> в пределах которого центральный
                <br />
                банк допускает колебания курса <br /> национальной валюты.
              </div>

              <Link
                className="mt-auto  linkDecoration btnInformation pt-2"
                to="information/valutecorridor"
              >
                Подробнее
              </Link>
            </div>

            <div className="card d-flex flex-nowrap align-items-start flex-column">
              <div className="description-info">
                Валютный арбитраж <br />
              </div>
              <div className="descript-info">
                Валютный арбитраж – (англ. Currency <br /> Arbitrage) является
                одновременной <br /> покупкой и продажейвалюты с целью <br />
                получения дохода за счет разницы <br /> цен на различных рынках.
              </div>

              <Link
                className="linkDecoration mt-auto btnInformation pt-2"
                to="information/valutearbitr"
              >
                Подробнее
              </Link>
            </div>

            <div className="card d-flex flex-nowrap align-items-start flex-column mr-0">
              <div className="description-info">
                Валютный арбитраж <br /> на основании <br />
                коридоров
              </div>
              <div className="descript-info">
                Валютный арбитраж на основании <br /> коридоров – проведение
                операций по <br /> приобретению/продаже валюты <br />
                безналичным способом, с целью <br /> получения дохода.
              </div>

              <Link
                className="linkDecoration mt-auto  linkDecoration btnInformation pt-2"
                to="information/valutearbitrcor"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
