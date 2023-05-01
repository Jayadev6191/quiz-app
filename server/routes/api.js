const express = require("express");
const router = express.Router();
const { data } = require("../data");

router.get("/questions/:id", (req, res) => {
  const id = req.params.id;
  const {
    question,
    question_code_block,
    options,
    option_type,
    language,
    answer_format,
  } = data[id];
  const resp = {
    question,
    question_code_block,
    options,
    option_type,
    language,
    answer_format,
  };
  res.json(resp);
});

module.exports = router;
