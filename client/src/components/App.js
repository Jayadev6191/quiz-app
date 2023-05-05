import React from "react";
import { Routes, Route } from "react-router-dom";
import { StyledAppContainer } from "./styles/App.styles";
import User from "./User";
import Quiz from "./Quiz";

function App() {
  return (
    <StyledAppContainer className="App">
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </StyledAppContainer>
  );
}

export default App;
