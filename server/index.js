const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// import routes
const apiRouter = require("./routes/api");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// use routes
app.use(apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
