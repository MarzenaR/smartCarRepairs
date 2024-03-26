import styled, { css } from "styled-components";
import { Select } from "@mui/material";

export const FormElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  width: 350px;

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

export const FullWidthSelect = styled(Select)`
  width: 100%;
  margin: 6px 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 483px) {
    grid-template-columns: 1fr;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 6px 0;
  padding: 10px;
  border: 2px solid lightgray;
  border-radius: 5px;
  height: 150px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 483px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 70vw;
  }
  @media (max-width: 483px) {
    grid-template-columns: 1fr;

    margin-left: 30px;
    margin-right: 25px;
  }
`;

export const DateWrapper = styled.div`
  width: 350px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 70vw;
  }
  @media (max-width: 483px) {
    grid-template-columns: 1fr;

    margin-left: 30px;
    margin-right: 25px;
  }
`;

export const FormWrapper = styled.div`
  width: 40%;
  @media (max-width: 700px) {
    width: 70%;
  }
`;
