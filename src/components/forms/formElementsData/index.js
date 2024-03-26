import { Link } from "react-router-dom";

export const loginFormElements = [
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
  },
  {
    inputName: "password",
    inputType: "password",
    labelContent: "Password",
  },
];

export const registerFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "First Name",
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
  },
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
  },
  {
    inputName: "password",
    inputType: "password",
    labelContent: "Password",
  },
  {
    inputName: "confirmPassword",
    inputType: "password",
    labelContent: "Confirm Password",
  },

  {
    inputName: "contactNumber",
    inputType: "number",
    labelContent: "Contact number",
  },

  {
    inputName: "acceptTerms",
    inputType: "checkbox",
    labelContent: <Link to="/">Acceptance of Terms of Service</Link>,
  },
];

export const accountFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "First Name",
    disabled: false,
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
    disabled: false,
  },
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
    disabled: true,
  },
  {
    inputName: "phoneNumber",
    inputType: "text",
    labelContent: "Phone number",
    disabled: true,
  },
  {
    inputName: "addressLine1",
    inputType: "text",
    labelContent: "Address line 1",
    disabled: true,
  },
  {
    inputName: "addressLine2",
    inputType: "text",
    labelContent: "Address line 2",
    disabled: true,
  },
  {
    inputName: "town",
    inputType: "text",
    labelContent: "Town / City",
    disabled: true,
  },
  {
    inputName: "postcode",
    inputType: "text",
    labelContent: "Postcode",
    disabled: true,
  },
];

export const BookingJobFormElements = [
  {
    inputName: "vehicleRegistration",
    inputType: "text",
    labelContent: "Vehicle Registration",
  },
  {
    inputName: "productionYear",
    inputType: "text",
    labelContent: "Car production year",
  },
];

export const editUsersFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "First Name",
    disabled: false,
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
    disabled: false,
  },
  {
    inputName: "email",
    inputType: "email",
    labelContent: "Email",
    disabled: true,
  },
  {
    inputName: "phoneNumber",
    inputType: "text",
    labelContent: "Phone number",
    disabled: true,
  },
  {
    inputName: "addressLine1",
    inputType: "text",
    labelContent: "Address line 1",
    disabled: true,
  },
  {
    inputName: "addressLine2",
    inputType: "text",
    labelContent: "Address line 2",
    disabled: true,
  },
  {
    inputName: "town",
    inputType: "text",
    labelContent: "Town / City",
    disabled: true,
  },
  {
    inputName: "postcode",
    inputType: "text",
    labelContent: "Postcode",
    disabled: true,
  },
];

export const editGarageFormElements = [
  {
    inputName: "name",
    inputType: "text",
    labelContent: "Garage Name",
  },
  {
    inputName: "town",
    inputType: "text",
    labelContent: "Garage Town",
  },
  {
    inputName: "spaces",
    inputType: "text",
    labelContent: "Garage spaces",
  },
];

export const contactUsFormElements = [
  {
    inputName: "firstName",
    inputType: "text",
    labelContent: "Firstname",
  },
  {
    inputName: "surname",
    inputType: "text",
    labelContent: "Surname",
  },
  {
    inputName: "email",
    inputType: "text",
    labelContent: "Email",
  },
];
