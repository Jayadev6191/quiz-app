import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { StyledButton } from "./styles/App.styles";
import {
  StyledQuestionContainer,
  StyledQuestionTitle,
  StyledQuestionCodeBlock,
  StyledQuestionOptionContainer,
  StyledQuestionOptions,
  StyledQuestionOption,
  StyledQuestionFooter,
} from "./styles/Questions.styles";

const Questions = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [hasSelectedOption, setHasSelectedOption] = useState(false);

  const apiBaseUrl = `http://${window.location.hostname}:5000`;

  useEffect(() => {
    fetch(`${apiBaseUrl}/questions/${questionNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data returned from the server
        const {
          question,
          question_code_block,
          options,
          option_type,
          language,
          answer_format,
        } = data;
        setCurrentQuestion({
          question,
          question_code_block,
          options,
          option_type,
          language,
          answer_format,
        });
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }, [questionNumber]);

  const hasAnyOptionSelected = () => {
    const options = document.getElementsByName("options");
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        return true;
      }
    }
    return false;
  };

  const handleOptionClick = (index) => {
    const input = document.getElementById(`option-${index}`);
    input.checked = !input.checked;
    setHasSelectedOption(hasAnyOptionSelected());
  };

  const handleNextClick = (index) => {
    setQuestionNumber(index + 1);
  };

  const handlePrevClick = (index) => {
    setQuestionNumber(index - 1);
  };

  const CodeBlockOptions = ({ currentQuestion }) => (
    <StyledQuestionOptions>
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
    </StyledQuestionOptions>
  );

  const TextOptions = ({ currentQuestion }) => (
    <StyledQuestionOptions>
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
              <span>{option}</span>
            </StyledQuestionOption>
          );
        })}
    </StyledQuestionOptions>
  );

  return (
    <StyledQuestionContainer>
      <StyledQuestionTitle>{currentQuestion.question}</StyledQuestionTitle>
      {currentQuestion?.question_code_block ? (
        <StyledQuestionCodeBlock>
          <SyntaxHighlighter
            language={currentQuestion.language}
            style={darcula}
          >
            {currentQuestion.question_code_block}
          </SyntaxHighlighter>
        </StyledQuestionCodeBlock>
      ) : null}
      <StyledQuestionOptionContainer>
        {currentQuestion?.option_type === "code_blocks" ? (
          <CodeBlockOptions currentQuestion={currentQuestion} />
        ) : (
          <TextOptions currentQuestion={currentQuestion} />
        )}
      </StyledQuestionOptionContainer>
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
