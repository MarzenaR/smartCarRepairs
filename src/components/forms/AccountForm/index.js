import React from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { accountFormElements } from "../formElementsData";
import FormElement from "../../atoms/FormElement";
import { StyledForm } from "../styled";
import { accountFormValidationSchema } from "../../../utils/validationSchema";
import { useSelector } from "react-redux";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { FormWrapper } from "./StyledAccountForm";

const AccountForm = () => {
  const { currentUser } = useSelector((state) => state);

  return (
    <Formik
      initialValues={{
        firstName: currentUser?.firstName,
        surname: currentUser?.surname,
        email: currentUser?.email,
        phoneNumber: currentUser?.phoneNumber,
        addressLine1: currentUser?.addressLine1,
        addressLine2: currentUser?.addressLine2,
        town: currentUser?.town,
        postcode: currentUser?.postcode,
      }}
      validationSchema={accountFormValidationSchema}
      onSubmit={(values) => {
        usersCollection
          .doc(currentUser?.userId)
          .update(values)
          .then(() => window.location.reload());
      }}
    >
      {() => (
        <FormWrapper>
          <StyledForm>
            {accountFormElements.map((el) => (
              <FormElement
                key={el.inputName}
                inputName={el.inputName}
                inputType={el.inputType}
                labelContent={el.labelContent}
              />
            ))}

            <Button type="submit">Update</Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default AccountForm;
