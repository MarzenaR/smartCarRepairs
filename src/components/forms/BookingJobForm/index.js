import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { BookingJobFormElements } from "../formElementsData";
import FormElement from "../../atoms/FormElement";
import { StyledForm } from "../styled";
import { sendBookingJobFormValidationSchema } from "../../../utils/validationSchema";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { styled as materialStyled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { storage } from "../../../firebase/firebaseConfig";
import {
  bookingsJobsCollection,
  garagesCollection,
} from "../../../firebase/firestoreUtils";
import { FormElementWrapper } from "../../atoms/FormElement/StyledFormElement";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { TextArea, Label, FormWrapper } from "./StyledBookingJobForm";
import Autocomplete from "@mui/material/Autocomplete";
import { ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import FormSelect from "../../atoms/FormSelect/FormSelect";

const Input = materialStyled("input")({
  display: "none",
});

const BookingJobForm = () => {
  const { currentUser } = useSelector((state) => state);
  const [image, setImage] = useState();
  const [garages, setGarages] = useState([]);
  const [carsModels, setCarsModels] = useState([]);

  const navigate = useNavigate();

  const fetchCarsModels = async (carProducer) => {
    const request = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?select=model&group_by=model&limit=500&refine=make%3A%22${carProducer}%22`
    );
    const response = await request.json();
    setCarsModels(
      response.results.map((car) => ({ value: car.model, label: car.model }))
    );
  };

  useEffect(() => {
    garagesCollection.get().then((response) => {
      setGarages(response.docs.map((el) => ({ id: el.id, ...el.data() })));
    });
  }, []);

  const uploadImage = () => {
    const extension = image.name.split(".").slice(-1)[0];
    const fileName = `${new Date().getTime()}.${extension}`;

    return new Promise((resolve) => {
      storage
        .ref(`/images/${fileName}`)
        .put(image)
        .then(() => {
          storage.ref("images").child(fileName).getDownloadURL().then(resolve);
        });
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          garage: "",
          vehicleRegistration: "",
          description: "",
          jobType: "",
          carProducer: "",
          carModel: "",
          productionYear: "",
        }}
        validationSchema={sendBookingJobFormValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          let imageUrl = "";

          if (image) {
            imageUrl = await uploadImage();
          }

          bookingsJobsCollection
            .add({
              imageUrl,
              ...values,
              userId: currentUser?.userId,
              status: "to_garage_accept",
            })
            .then((response) => {
              navigate("/");
            });
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <FormWrapper>
            <StyledForm>
              {BookingJobFormElements.map((el) => (
                <FormElement
                  key={el.inputName}
                  inputName={el.inputName}
                  inputType={el.inputType}
                  labelContent={el.labelContent}
                />
              ))}

              <FormSelect
                name="garage"
                label="Garage"
                handleChange={handleChange}
                value={values.garage}
                options={garages.map((garage) => ({
                  value: garage.id,
                  text: `${garage.name} ${garage.town}`,
                }))}
              />

              <FormSelect
                name="jobType"
                label="Job type"
                handleChange={handleChange}
                value={values.jobType}
                options={[
                  { value: "Repair" },
                  { value: "Paint" },
                  { value: "Tyres" },
                  { value: "Other" },
                ]}
              />

              <FormElementWrapper>
                <Label>Car model</Label>
                <Autocomplete
                  onChange={(e, value) => {
                    setFieldValue("carModel", "");
                    setCarsModels([]);
                    if (value) {
                      setFieldValue("carProducer", value.value);
                      fetchCarsModels(value.value);
                    } else {
                      setFieldValue("carProducer", "");
                    }
                  }}
                  name="carProducer"
                  disablePortal
                  id="carProducer"
                  options={[
                    { label: "Fiat", value: "Fiat" },
                    { label: "BMW", value: "BMW" },
                    { label: "Audi", value: "Audi" },
                    { label: "Tesla", value: "Tesla" },
                    { label: "Bugatti", value: "Bugatti" },
                  ]}
                  value={values.carProducer}
                  renderInput={(params) => (
                    <TextField {...params} label="Car producer" />
                  )}
                  style={{ margin: "6px 0" }}
                />

                <div className="error-wrapper">
                  <ErrorMessage name="carProducer" />
                </div>
              </FormElementWrapper>
              <FormElementWrapper>
                <Label>Car producer</Label>
                <Autocomplete
                  onChange={(e, value) =>
                    setFieldValue("carModel", value ? value.value : "")
                  }
                  name="carModel"
                  disablePortal
                  id="carModel"
                  options={carsModels}
                  value={values.carModel}
                  renderInput={(params) => (
                    <TextField {...params} label="Car model" />
                  )}
                  style={{ margin: "6px 0" }}
                />

                <div className="error-wrapper">
                  <ErrorMessage name="carModel" />
                </div>
              </FormElementWrapper>
              <FormElementWrapper>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                ></TextArea>
                <div className="error-wrapper">
                  <ErrorMessage name="description" />
                </div>
              </FormElementWrapper>
              <FormElementWrapper>
                <Label
                  style={{
                    textJustify: "center",
                  }}
                >
                  Upload Image
                </Label>
                <label
                  htmlFor="icon-button-file"
                  style={{ marginBottom: "20px" }}
                >
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />

                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <UploadFileIcon />
                  </IconButton>
                </label>
              </FormElementWrapper>

              <div
                style={{
                  textAlign: "center",
                }}
              >
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    style={{
                      width: "75%",
                      borderRadius: "15px",
                      marginBottom: "5px",
                      textJustify: "center",
                    }}
                  />
                )}
              </div>
              {/* **************************************upload image ***************************************************************** */}

              <Button type="submit">Submit</Button>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

export default BookingJobForm;
