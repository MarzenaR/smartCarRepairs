import { useState } from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { loginFormElements } from "../formElementsData";
import FormElement from "../../atoms/FormElement";
import Logo from "../../atoms/Logo";
import { StyledForm } from "../styled";
import {
  loginFormValidationSchema,
  resetPasswordValidationSchema,
} from "../../../utils/validationSchema";
import { auth } from "../../../firebase/firebaseConfig";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { useDispatch } from "react-redux";
import { closeModal, setCurrentUser } from "../../../redux/actions";

import { ResetButton, LogoWrapper } from "./StyledLoginForm";
import { StyledFormControl } from "./StyledLoginForm";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [showResetPassword, setShowResetPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        acceptTerms: false,
        reset_email: "",
      }}
      validationSchema={
        showResetPassword
          ? resetPasswordValidationSchema
          : loginFormValidationSchema
      }
      onSubmit={(values, { resetForm }) => {
        if (showResetPassword) {
          auth
            .sendPasswordResetEmail(values.reset_email)
            .then(() => {
              alert("Reset link was send to your adres email!");
              resetForm();
              setShowResetPassword(false);
            })
            .catch((error) => {
              if (error.code === "auth/user-not-found") {
                alert("User with this email address not exist!");
              }
            });

          return;
        }

        auth
          .signInWithEmailAndPassword(values.email, values.password)
          .then((res) => {
            usersCollection
              .doc(res.user.uid)
              .get()
              .then((res) => {
                if (!res.data()) {
                  auth.signOut();
                  return alert("User with this email address not exist!");
                } else {
                  dispatch(closeModal());
                  dispatch(setCurrentUser(res.data()));
                }
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));

        resetForm();
      }}
    >
      {() => (
        <StyledForm>
          <StyledFormControl>
            <LogoWrapper>
              <Logo width="150px" />
            </LogoWrapper>

            {!showResetPassword && (
              <>
                {loginFormElements.map((el) => (
                  <FormElement
                    inputName={el.inputName}
                    inputType={el.inputType}
                    labelContent={el.labelContent}
                  />
                ))}
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{ margin: "0 auto", display: "block" }}
                    type="submit"
                  >
                    {showResetPassword ? "Reset password" : "Log in"}
                  </Button>
                </div>
                <br />
                <ResetButton onClick={() => setShowResetPassword(true)}>
                  Forgotten password?
                </ResetButton>
              </>
            )}
            {showResetPassword && (
              <>
                <FormElement
                  inputName="reset_email"
                  inputType="email"
                  labelContent="Type your email"
                />
                <ResetButton onClick={() => setShowResetPassword(false)}>
                  Return to login
                </ResetButton>
              </>
            )}
          </StyledFormControl>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
