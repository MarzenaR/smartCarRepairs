import styled, { css } from "styled-components";

export const FormElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;

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
    justify-content: space-evenly;
    gap: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 6px 0;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
  height: 150px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
`;

export const FormWrapper = styled.div`
  width: 40%;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 60%;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;
