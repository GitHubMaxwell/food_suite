import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
// import Header from "./UHF/Header.js";
// import Auth from "./Auth/Auth.js";
import Footer from "./UHF/Footer.js";
import Dashboard from "./Dashboard/Dashboard.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "????"
    };
  }
  render() {
    return (
      <HashRouter>
        {/* <Auth> */}
        <Fragment>
          {/* <Header current={this.state.current} /> */}
          <Route exact path="/" component={Dashboard} />
          <Footer />
        </Fragment>
        {/* </Auth> */}
      </HashRouter>
    );
  }
}
