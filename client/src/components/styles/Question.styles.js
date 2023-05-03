import styled from "styled-components";

const StyledQuestionContainer = styled.div`
  padding: 40px;
`;

const StyledQuestionTitle = styled.h2``;

const StyledQuestionCodeBlock = styled.div``;

const StyledQuestionOptionContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  margin: 30px 10px;
  padding: 30px;
`;

const StyledQuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledQuestionOption = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  min-width: 800px;

  & > input {
    margin-right: 20px;
  }

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > pre {
      min-width: 800px;
    }
  }
`;

const StyledQuestionFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-drection: row;
`;

const StyledQuestionInfo = styled.a`
  margin-left: 20px;
`;

export {
  StyledQuestionContainer,
  StyledQuestionTitle,
  StyledQuestionInfo,
  StyledQuestionCodeBlock,
  StyledQuestionOptionContainer,
  StyledQuestionOptions,
  StyledQuestionOption,
  StyledQuestionFooter,
};
