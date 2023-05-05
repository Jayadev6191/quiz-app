import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledAppContainer } from "./styles/App.styles";
import User from "./User";
import Quiz from "./Quiz";

function App() {
  return (
    <Router>
      <StyledAppContainer className="App">
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Switch>
      </StyledAppContainer>
    </Router>
  );
}

export default App;
