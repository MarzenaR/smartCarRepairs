import { Formik } from "formik";
import Button from "../Button";
import { StyledForm } from "../../forms/styled";
import FormElement from "../FormElement";
import { editGarageFormElements } from "../../forms/formElementsData";
import { garagesCollection } from "../../../firebase/firestoreUtils";

const EditGarage = ({ garage }) => {
  return (
    <Formik
      initialValues={{
        name: garage?.name,
        town: garage?.town,
        spaces: garage?.spaces,
      }}
      onSubmit={(values) => {
        garagesCollection
          .doc(garage.id)
          .update(values)
          .then(() => window.location.reload());
      }}
    >
      {() => (
        <StyledForm>
          {editGarageFormElements.map((el) => (
            <FormElement
              key={el.inputName}
              inputName={el.inputName}
              inputType={el.inputType}
              labelContent={el.labelContent}
            />
          ))}

          <Button type="submit">Save</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EditGarage;
