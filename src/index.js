// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PortfolioLanding from "./screens/PortfolioLanding";
import Error404 from "./elements/error404";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={"/"} component={PortfolioLanding} />
          <Route path={"/404"} component={Error404} />
          <Route component={PortfolioLanding} />
        </Switch>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
