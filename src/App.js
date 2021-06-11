import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import GenerateHoroscopes from "./pages/generate_horoscope/generate_horoscope";
import { authRequired } from "./components/protected_route/auth_required";
import Logout from "./components/logout/logout";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/generate">{authRequired(GenerateHoroscopes)}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
