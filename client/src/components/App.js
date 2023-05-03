import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StyledAppContainer } from "./styles/App.styles";
import Quiz from "./Quiz";

function App() {
  return (
    <Router>
      <StyledAppContainer className="App">
        <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
        </Switch>
      </StyledAppContainer>
    </Router>
  );
}

export default App;
