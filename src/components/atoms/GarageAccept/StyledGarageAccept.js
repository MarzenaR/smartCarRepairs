import styled from "styled-components";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { FormControl, Select } from "@mui/material";

export const DateAndTimeWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledDesktopDatePicker = styled(DesktopDatePicker)`
  @media (max-width: 800px) {
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
      width: 30vw !important;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;
`;

export const FullWidthSelect = styled(Select)`
  width: 350px;

  @media (max-width: 500px) {
    width: 50vw;
    align-items: center;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
