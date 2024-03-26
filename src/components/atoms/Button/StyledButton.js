import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 150px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.btnContent};
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px 20px;
  font-size: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
