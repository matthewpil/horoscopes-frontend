import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import { authRequired } from "./components/protected_route/auth_required";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details">{authRequired(Details)}</Route>
          <Route path="/dashboard">{Dashboard}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
