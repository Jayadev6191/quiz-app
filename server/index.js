const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// import routes
const questionsRouter = require("./routes/questions");
const submitRouter = require("./routes/submit");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// use routes
app.use(questionsRouter);
app.use(submitRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
