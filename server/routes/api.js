const express = require("express");
const router = express.Router();
const { data } = require("../data");

router.get("/questions/:id", (req, res) => {
  const id = req.params.id;
  const { question, options, language, answer_format } = data[id];
  const resp = {
    question,
    options,
    language,
    answer_format,
  };
  res.json(resp);
});

module.exports = router;
