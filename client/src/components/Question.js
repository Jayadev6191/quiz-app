import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  StyledQuestionContainer,
  StyledQuestionTitle,
  StyledQuestionInfo,
  StyledQuestionCodeBlock,
  StyledQuestionOptionContainer,
  StyledQuestionOptions,
  StyledQuestionOption,
} from "./styles/Question.styles";

const Question = ({
  currentQuestion,
  questionNumber,
  onEditAnswer,
  selectedOptions,
}) => {
  const [localSelectedOptions, setLocalSelectedOptions] =
    useState(selectedOptions);

  useEffect(() => {
    setLocalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    if (Object.keys(localSelectedOptions).length) {
      onEditAnswer(questionNumber, localSelectedOptions);
    }
  }, [localSelectedOptions]);

  const handleOptionClick = (event) => {
    const { value, checked, type } = event.target;
    let updateSelection;
    if (type === "checkbox") {
      updateSelection = { ...localSelectedOptions, [value]: checked };
      if (!checked) {
        delete updateSelection[value];
      }
    } else if (type === "radio") {
      updateSelection = { [value]: checked };
    }

    setLocalSelectedOptions(updateSelection);
  };

  const CodeBlockOptions = ({ currentQuestion }) => (
    <StyledQuestionOptions>
      {currentQuestion &&
        currentQuestion?.options?.map((option, index) => {
          return (
            <StyledQuestionOption key={index}>
              <label htmlFor={`option-${index}`}>
                {currentQuestion?.answer_format === "single" ? (
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="options"
                    value={index}
                    checked={localSelectedOptions[index]}
                    onChange={handleOptionClick}
                  />
                ) : (
                  <input
                    type="checkbox"
                    id={`option-${index}`}
                    name="options"
                    value={index}
                    checked={localSelectedOptions[index]}
                    onChange={handleOptionClick}
                  />
                )}
                <SyntaxHighlighter
                  language={currentQuestion.language}
                  style={darcula}
                  key={index}
                >
                  {option}
                </SyntaxHighlighter>
              </label>
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
            <StyledQuestionOption key={index}>
              <label htmlFor={`option-${index}`}>
                {currentQuestion?.answer_format === "single" ? (
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="options"
                    checked={localSelectedOptions[index]}
                    value={index}
                    onChange={handleOptionClick}
                  />
                ) : (
                  <input
                    type="checkbox"
                    id={`option-${index}`}
                    name="options"
                    checked={localSelectedOptions[index]}
                    value={index}
                    onChange={handleOptionClick}
                  />
                )}
                <span>{option}</span>
              </label>
            </StyledQuestionOption>
          );
        })}
    </StyledQuestionOptions>
  );

  return (
    <StyledQuestionContainer>
      <StyledQuestionTitle>
        {currentQuestion.question}
        <StyledQuestionInfo
          href={currentQuestion.info_redirect_url}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </StyledQuestionInfo>
      </StyledQuestionTitle>
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
    </StyledQuestionContainer>
  );
};

export default Question;
