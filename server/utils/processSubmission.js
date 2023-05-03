const processSubmission = (data, answers) => {
  let count = 0;
  // original correct choices of the quiz decided by the quiz master
  const correct_choices = data.map((obj) => obj.correct_choices);
  // compare the correct choices with the submitted answers
  for (let i = 0; i < correct_choices.length; i++) {
    if (correct_choices[i].length !== answers[i].length) {
      continue;
    }
    let subArrMatch = true;
    for (let j = 0; j < correct_choices[i].length; j++) {
      if (correct_choices[i][j] !== answers[i][j]) {
        subArrMatch = false;
        break;
      }
    }
    if (subArrMatch) {
      count++;
    }
  }

  const percentage = (count / data.length) * 100;
  return Math.round(percentage);
};

module.exports = { processSubmission };
