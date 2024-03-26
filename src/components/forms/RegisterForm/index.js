import React, { useState } from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { registerFormElements } from "../formElementsData";
import FormElement from "../../atoms/FormElement";
import Logo from "../../atoms/Logo";
import { StyledForm } from "../styled";
import { registerFormValidationSchema } from "../../../utils/validationSchema";
import { auth } from "../../../firebase/firebaseConfig";
import { usersCollection } from "../../../firebase/firestoreUtils";
import { closeModal } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoStop } from "react-icons/go";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LogoWrapper, ButtonWrapper } from "./StyledRegisterForm";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          surname: "",
          contactNumber: "",
          acceptTerms: false,
        }}
        validationSchema={registerFormValidationSchema}
        onSubmit={(values, { resetForm }) => {
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
              dispatch(closeModal());
              delete values["password"];
              delete values["confirmPassword"];
              delete values["acceptTerms"];

              usersCollection
                .doc(res.user.uid)
                .set({
                  ...values,
                  role: "user",
                  userId: res.user.uid,
                })
                .then(() => {
                  resetForm();
                  setIsModalOpen(true);
                });
            })
            .catch((err) => {
              resetForm();
              setIsModalOpen(true);
              setTimeout(() => {
                setIsModalOpen(false);
                dispatch(closeModal());
                navigate("/");
              }, 7000);
            });
        }}
      >
        {(props) => (
          <StyledForm>
            <LogoWrapper>
              <Logo width="150px" />
            </LogoWrapper>

            {registerFormElements.map((el, index) => (
              <>
                <FormElement
                  key={index}
                  inputName={el.inputName}
                  inputType={el.inputType}
                  labelContent={el.labelContent}
                />
              </>
            ))}
            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>

      <Dialog
        open={isModalOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ color: "red", textAlign: "center", fontSize: "15px" }}
          id="alert-dialog-title"
        >
          <GoStop style={{ margin: "0 5px 0 0" }} size={30} />
          {"   "}
          UNSUCCESSFUL REGISTRATION !
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ fontSize: "20px", textAlign: "center" }}
            id="alert-dialog-description"
          >
            This email address already exists
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterForm;
