import React, { useState, useEffect, useRef } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { StyledUserForm, StyledInputRow } from "./styles/User.styles";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  startButton: {
    "&:disabled": {
      backgroundColor: "#3f51b5",
      pointerEvents: "none",
      color: "#FFFFFF",
      opacity: 0.5,
    },
  },
}));

const User = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleButtonClick = () => {
    // pass the email to a component in a different route
    if (isValidEmail) {
      navigate(`/quiz?email=${email}`);
    }
  };

  return (
    <StyledUserForm>
      <StyledInputRow>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
              value={email}
              inputRef={inputRef}
              onChange={handleEmailChange}
              error={!isValidEmail && email !== ""}
              helperText={!isValidEmail && email !== "" ? "Invalid email" : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!isValidEmail}
              className={classes.startButton}
              onClick={handleButtonClick}
            >
              Start Quiz
            </Button>
          </Grid>
        </Grid>
      </StyledInputRow>
    </StyledUserForm>
  );
};

export default User;
