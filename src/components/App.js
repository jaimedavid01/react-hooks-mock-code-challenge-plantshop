import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Intro from './Intro';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">
  <Switch>
  <Route path="/app">
  <Header />
  <PlantPage />
  </Route>

  <Route path="/">
  <Intro />
  </Route>
  
  </Switch>

</div>
  </Router>
  );
}

export default App;
