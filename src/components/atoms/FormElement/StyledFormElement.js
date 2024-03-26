import { Field } from "formik";
import styled, { css } from "styled-components";

export const FormElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  .error-wrapper {
    color: red;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Input = styled(Field)`
  margin: 6px 0;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  .textarea {
    height: 200px;
  }

  ${({ isCheckbox }) =>
    isCheckbox &&
    css`
      height: 20px;
      width: 20px;
    `}

  ${({ isTextarea }) =>
    isTextarea &&
    css`
      height: 200px;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
`;
