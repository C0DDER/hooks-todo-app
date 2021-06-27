import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import EditTask from "./pages/EditTask";

import "./index.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Tasks} />
        <Route path="/edit/:id" component={EditTask} />
      </Switch>
    </Router>
  );
}

export default App;
