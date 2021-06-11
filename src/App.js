import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import GenerateHoroscopes from "./pages/generate_horoscope/generate_horoscope";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/generate">
          <GenerateHoroscopes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
