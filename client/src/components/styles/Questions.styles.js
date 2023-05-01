import styled from "styled-components";

const StyledQuestionContainer = styled.div`
  padding: 40px;
`;

const StyledQuestionTitle = styled.h2``;

const StledQuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledQuestionOption = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledQuestionFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-drection: row;
`;

export {
  StyledQuestionContainer,
  StyledQuestionTitle,
  StledQuestionOptions,
  StyledQuestionOption,
  StyledQuestionFooter,
};
