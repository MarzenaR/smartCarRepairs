import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 char, one uppercase, one number, one special char"
    ),

  //acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  reset_email: Yup.string().email("Invalid email").required("Enter your email"),
});

export const registerFormValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .required("Enter password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 char, one uppercase, one number, one special char"
    ),

  confirmPassword: Yup.string()
    .required("Confirm password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
    }),

  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});

export const contactUsFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter firstname"),
  surname: Yup.string().required("Enter surname"),
  email: Yup.string().email().required("Enter email"),
  message: Yup.string().required("Enter message"),
});

export const sendBookingJobFormValidationSchema = Yup.object().shape({
  garage: Yup.string().required("Garage is required"),
  vehicleRegistration: Yup.string().required("Enter Vehicle Registration"),
  description: Yup.string().required("Description is required"),
  carProducer: Yup.string().required("Car producer is required"),
  carModel: Yup.string().required("Car model is required"),
  productionYear: Yup.number().required("Production year is required"),
  jobType: Yup.string().required("Job type is required"),
});

export const accountFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter firstname"),
  surname: Yup.string().required("Enter surname"),
  email: Yup.string().email("Email format is invalid!").required("Enter email"),
  phoneNumber: Yup.string().required("Enter phone number"),
  addressLine1: Yup.string().required("Enter address line 1"),
  town: Yup.string().required("Enter town / city"),
  postcode: Yup.string().required("Enter postcode"),
});
