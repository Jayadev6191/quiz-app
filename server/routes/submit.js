const express = require("express");
const { processSubmission } = require("../utils/processSubmission");
const { PASS_MARK, STATUS_PASS, STATUS_FAILED } = require("../utils/constants");
const { data } = require("../data");

const router = express.Router();

router.post("/submit", (req, res) => {
  const { formatted_answers } = req.body;
  const score = processSubmission(data, formatted_answers);

  // status - PASS OR FAIL
  // result - Score in percentage
  let status = "";
  if (score < PASS_MARK) {
    status = STATUS_FAILED;
  } else {
    status = STATUS_PASS;
  }
  // Make any API call to any external hooks if necessary
  // TBD ^^^

  // return the result back to the UI
  res.json({ score, status });
});

module.exports = router;
