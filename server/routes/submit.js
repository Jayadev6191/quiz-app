const express = require("express");
const { processSubmission } = require("../utils/processSubmission");
const { PASS_MARK, STATUS_PASS, STATUS_FAILED } = require("../utils/constants");
const { data } = require("../data");

const router = express.Router();

router.post("/submit", (req, res) => {
  const { formatted_answers, email } = req.body;
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
  console.log(`email of the user is ${email}`);
  // We have email id of the user as part of the req.body
  // that can be used to call any external API hook
  // If needed

  // return the result back to the UI
  res.json({ score, status });
});

module.exports = router;
