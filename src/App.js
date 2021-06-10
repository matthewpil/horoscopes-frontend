import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/about";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import GenerateHoroscopes from "./pages/generate_horoscope/generate_horoscope";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/generate">
          <GenerateHoroscopes />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
