import { Formik } from "formik";
import Button from "../Button";
import FormElement from "../FormElement";
import { StyledForm } from "../../forms/styled";
import { editUsersFormElements } from "../../forms/formElementsData";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { StyledFormControl } from "./StyledEditIcon";
import { usersCollection } from "../../../firebase/firestoreUtils";

const EditUser = ({ user }) => {
  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        addressLine1: user.addressLine1,
        addressLine2: user.addressLine2,
        town: user.town,
        postcode: user.postcode,
        role: user.role,
      }}
      onSubmit={(values) => {
        usersCollection
          .doc(user.userId)
          .update(values)
          .then((response) => window.location.reload());
      }}
    >
      {(props) => (
        <StyledForm>
          {editUsersFormElements.map((el) => (
            <FormElement
              key={el.inputName}
              inputName={el.inputName}
              inputType={el.inputType}
              labelContent={el.labelContent}
            />
          ))}

          <StyledFormControl style={{ marginBottom: "20px" }}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Start time"
              required
              name="role"
              value={props.values.role}
              onChange={props.handleChange}
            >
              <MenuItem selected={user.role === "user"} value="user">
                User
              </MenuItem>
              <MenuItem selected={user.role === "admin"} value="admin">
                Admin
              </MenuItem>
            </Select>
          </StyledFormControl>
          <Button type="submit">Save</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EditUser;
