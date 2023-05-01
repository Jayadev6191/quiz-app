import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6fff8;
  box-sizing: border-box;
  margin: 100px;
`;

const StyledButton = styled.button`
  background-color: #1abc9c;
  color: #ffffff;
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      background-color: #6c757d;
    }
  }

  &:not(:disabled):hover {
    background-color: #148f77;
  }

  &:active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }
`;

export { StyledAppContainer, StyledButton };
