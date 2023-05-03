const express = require("express");
const { data } = require("../data");

const router = express.Router();

router.get("/questions/:id", (req, res) => {
  const id = req.params.id;
  const {
    question,
    question_code_block,
    options,
    option_type,
    language,
    answer_format,
    info_redirect_url,
  } = data[id];
  const resp = {
    question,
    question_code_block,
    options,
    option_type,
    language,
    answer_format,
    info_redirect_url,
    total_question_count: data.length,
  };
  res.json(resp);
});

module.exports = router;
