const formatAnswers = (answers) => {
  const result = [];
  Object.keys(answers).map((index) => {
    const selected_answers = Object.keys(answers[index]).map((key) =>
      parseInt(key)
    );
    result.push(selected_answers);
  });
  return result;
};
export const submitQuiz = async (answers, email) => {
  try {
    const apiBaseUrl = "http://localhost:5000";
    // format the answers into array of arrays
    const formatted_answers = formatAnswers(answers);
    const response = await fetch(`${apiBaseUrl}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formatted_answers, email }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
