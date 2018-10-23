import React, { Component } from "react";
import Header from "./component/Header";
import ValuteCorridor from "./component/ValuteCorridor";
import PrevCorridor from "./component/PrevCorridor";
import Information from "./component/Information";
import CountersList from "./component/CountersList";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import PersonalRouting from "./component/personal/PersonalRouting";
import Footer from "./component/Footer";
import Sidebar from "react-sidebar";
import close from "./static/imges/close.svg";
import Entry from "./component/sidebar/Entry";
import BanksOfCounter from "./component/sidebar/BanksOfCounter";
import Registration from "./component/sidebar/Registration";
import WithdrawalOfFunds from "./component/sidebar/WithdrawalOfFunds";
import CopyLink from "./component/sidebar/CopyLink";
import Contact from "./component/Contact";
import SendMessage from "./component/sidebar/SendMessage";
import InformationRouting from "./component/information/InformationRouting";

class App extends Component {
  state = {
    sidebarOpen: false
  };

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.testStore.sidebarComponent[0] ===
        this.props.testStore.sidebarComponent[0] &&
      nextProps.testStore.IsSidebar[0] === this.props.testStore.IsSidebar[0]
    ) {
      this.onSetSidebarOpen(false);
    } else {
      this.onSetSidebarOpen(true);
    }
  }

  componentRender = name => {
    switch (name) {
      case "Registation":
        return <Registration />;
      case "Entry":
        return <Entry />;
      case "Banks":
        return <BanksOfCounter />;
      case "withdrawalOfFunds":
        return <WithdrawalOfFunds title="Вывод средств" />;
      case "AddFacilities":
        return <WithdrawalOfFunds title="Добавить средства" />;
      case "copy":
        return <CopyLink title="Ссылка скопирована" />;
      case "SendMessage":
        return <SendMessage title="Написать сообщение" />;
      default:
        return "Exit";
    }
  };

  Index = () => {
    return (
      <div>
        <Header />
        <ValuteCorridor />
        <PrevCorridor />
        <Information />
        <CountersList />
      </div>
    );
  };

  render() {
    return (
      <BrowserRouter>
        <Sidebar
          sidebar={
            <div className="sizeModal">
              <div
                className="sizeModalClose d-flex flex-row-reverse pt-5"
                style={{ marginRight: "-80px", marginBottom: "20px" }}
              >
                <img
                  className="closeSidebar"
                  src={close}
                  alt="close"
                  onClick={() => {
                    this.onSetSidebarOpen(false);
                  }}
                />
              </div>
              <div className="row sidebarMargin m-0">
                {this.componentRender(this.props.testStore.sidebarComponent[0])}
              </div>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          touch={true}
          shadow={true}
          docked={this.state.sidebarDocked}
          className="sizeSidebar"
          styles={{
            sidebar: {
              zIndex: "300",
              maxWidth: "683px",
              backgroundColor: "#edf2f9",
              boxShadow: "-20px 0 50px 0 rgba(0, 0, 0, 0.15)"
            }
          }}
        >
          <Navbar />
          {/* <Redirect from="*" to="/" /> */}

          <Route exact path="/" component={this.Index} />
          <Route
            path="/personal"
            component={PersonalRouting}
            action="REPLACE"
          />

          <Route path="/contact" component={Contact} action="REPLACE" />

          <Route
            path="/information"
            component={InformationRouting}
            action="REPLACE"
          />
          {/* <Route path="*" component={NotFound} /> */}
          <Footer />
        </Sidebar>
      </BrowserRouter>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(App);
