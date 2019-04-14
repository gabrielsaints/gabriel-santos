import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Construction from "./pages/Construction";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route patch="/" component={Construction} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
