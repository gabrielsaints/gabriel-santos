import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Construction from "./pages/Construction";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/work-in-progress" component={Construction} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
