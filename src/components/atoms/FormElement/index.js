import React from "react";
import { ErrorMessage } from "formik";
import { FormElementWrapper, Input, Label } from "./StyledFormElement";

const FormElement = ({
  inputName,
  inputType = "text",
  labelContent,
  isDisabled = false,
  isTextarea = false,
}) => {
  const renderFormElementContent = () => {
    switch (inputType) {
      case "password":
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <div className="password-wrapper">
              <Input name={inputName} id={inputName} type={inputType} />
            </div>
          </>
        );

      case "checkbox":
        return (
          <div className="checkbox-wrapper">
            <Input
              style={{ width: "auto" }}
              name={inputName}
              id={inputName}
              type={inputType}
            />
            <Label htmlFor={inputName}>{labelContent}</Label>
          </div>
        );

      case "textarea":
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <Input
              name={inputName}
              id={inputName}
              type={inputType}
              disabled={isDisabled}
            />
          </>
        );

      default:
        return (
          <>
            <Label htmlFor={inputName}>{labelContent}</Label>
            <Input
              name={inputName}
              id={inputName}
              type={inputType}
              disabled={isDisabled}
            />
          </>
        );
    }
  };

  return (
    <FormElementWrapper>
      {renderFormElementContent()}
      <div className="error-wrapper">
        <ErrorMessage name={inputName} />
      </div>
    </FormElementWrapper>
  );
};

export default FormElement;
