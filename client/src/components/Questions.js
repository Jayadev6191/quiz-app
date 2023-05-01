import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { StyledButton } from "./styles/App.styles";
import {
  StyledQuestionContainer,
  StyledQuestionTitle,
  StledQuestionOptions,
  StyledQuestionOption,
  StyledQuestionFooter,
} from "./styles/Questions.styles";

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [hasSelectedOption, setHasSelectedOption] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/questions/${questionNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data returned from the server
        const { question, options, language, answer_format } = data;
        setCurrentQuestion({ question, options, language, answer_format });
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, [questionNumber]);

  const handleOptionClick = (index) => {
    const input = document.getElementById(`option-${index}`);
    input.checked = !input.checked;
    setHasSelectedOption(hasAnyOptionSelected());
  };

  const hasAnyOptionSelected = () => {
    const options = document.getElementsByName("options");
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        return true;
      }
    }
    return false;
  };

  const handleNextClick = (index) => {
    setQuestionNumber(index + 1);
  };

  const handlePrevClick = (index) => {
    setQuestionNumber(index - 1);
  };

  return (
    <StyledQuestionContainer>
      <StyledQuestionTitle>{currentQuestion.question}</StyledQuestionTitle>
      <StledQuestionOptions>
        {currentQuestion &&
          currentQuestion?.options?.map((option, index) => {
            return (
              <StyledQuestionOption
                key={index}
                onClick={() => handleOptionClick(index)}
              >
                {currentQuestion?.answer_format === "single" ? (
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="options"
                    value={index}
                  />
                ) : (
                  <input
                    type="checkbox"
                    id={`option-${index}`}
                    name="options"
                    value={index}
                  />
                )}
                <SyntaxHighlighter
                  language={currentQuestion.language}
                  style={darcula}
                  key={index}
                >
                  {option}
                </SyntaxHighlighter>
              </StyledQuestionOption>
            );
          })}
      </StledQuestionOptions>
      <StyledQuestionFooter>
        <StyledButton
          disabled={questionNumber === 0}
          onClick={() => handlePrevClick(questionNumber)}
        >
          Previous
        </StyledButton>
        <StyledButton
          disabled={!hasSelectedOption}
          onClick={() => handleNextClick(questionNumber)}
        >
          Next
        </StyledButton>
      </StyledQuestionFooter>
    </StyledQuestionContainer>
  );
};

export default Questions;
