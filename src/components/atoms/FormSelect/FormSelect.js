import { FormElementWrapper, Label } from "../FormElement/StyledFormElement";
import { ErrorMessage } from "formik";
import { MenuItem } from "@mui/material";
import { FullWidthSelect } from "../../forms/BookingJobForm/StyledBookingJobForm";

const FormSelect = ({ label, name, handleChange, value, options }) => {
  return (
    <FormElementWrapper>
      <Label>{label}</Label>

      <FullWidthSelect
        name={name}
        label={label}
        onChange={handleChange}
        value={value}
        id={name}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.text || option.value}
          </MenuItem>
        ))}
      </FullWidthSelect>
      <div className="error-wrapper">
        <ErrorMessage name={name} />
      </div>
    </FormElementWrapper>
  );
};

export default FormSelect;
