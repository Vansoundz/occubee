import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Edit from "../components/edit/Edit";
import Profile from "../components/pages/Profile";
// import Account from "../components/pages/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/edit/:id" exact component={Edit} />
      <Route path="/usr/:id" exact component={Profile} />
    </Switch>
  );
};

export default Routes;
