import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  StyledFooter,
  StyledButton,
  StyledReportCard,
} from "./styles/App.styles";
import { fetchQuestion } from "../utils/fetchQuestion";
import { submitQuiz } from "../utils/submitQuiz";
import Question from "./Question";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answers, setAnswers] = useState({});
  const [totalQuestionCount, setTotalQuestionCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestion(questionNumber);
      if (data) {
        const {
          question,
          question_code_block,
          options,
          option_type,
          language,
          answer_format,
          info_redirect_url,
          total_question_count,
        } = data;
        setCurrentQuestion({
          question,
          question_code_block,
          options,
          option_type,
          language,
          answer_format,
          info_redirect_url,
        });
        setTotalQuestionCount(total_question_count);
      }
    };

    fetchData();
  }, [questionNumber]);

  // reset entire component state to the initial loaded state
  const resetState = () => {
    setQuestionNumber(0);
    setCurrentQuestion({});
    setAnswers({});
    setTotalQuestionCount(0);
    setIsSubmitted(false);
    setResult({});
  };

  const handlePrevClick = (index) => {
    setQuestionNumber(index - 1);
  };

  const handleNextClick = (index) => {
    setQuestionNumber(index + 1);
  };

  const handleSubmitClick = async () => {
    const data = await submitQuiz(answers, email);
    if (data) {
      setIsSubmitted(true);
      setResult({ score: data?.score, status: data?.status });
    }
  };

  const handleRetakeTestClick = () => {
    resetState();
  };

  const onEditAnswer = (key, value) => {
    setAnswers((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <div>
      {isSubmitted ? (
        <StyledReportCard>
          <h2>Quiz Score: {result.score} %</h2>
          <h3>Result: {result.status}</h3>
          {result.status === "FAILED" ? (
            <StyledButton onClick={handleRetakeTestClick}>
              Retake Test
            </StyledButton>
          ) : null}
        </StyledReportCard>
      ) : (
        <>
          <Question
            currentQuestion={currentQuestion}
            questionNumber={questionNumber}
            selectedOptions={answers[questionNumber] || {}}
            onEditAnswer={onEditAnswer}
          />
          <StyledFooter>
            {questionNumber === 0 ? null : (
              <StyledButton
                disabled={questionNumber === 0}
                onClick={() => handlePrevClick(questionNumber)}
              >
                Previous
              </StyledButton>
            )}

            {questionNumber + 1 === totalQuestionCount ? (
              <StyledButton
                disabled={!answers.hasOwnProperty(totalQuestionCount - 1)}
                onClick={handleSubmitClick}
              >
                Submit
              </StyledButton>
            ) : (
              <StyledButton
                disabled={
                  !answers.hasOwnProperty(questionNumber) ||
                  Object.keys(answers[questionNumber]).length === 0
                }
                onClick={() => handleNextClick(questionNumber)}
              >
                Next
              </StyledButton>
            )}
          </StyledFooter>
        </>
      )}
    </div>
  );
};

export default Quiz;
