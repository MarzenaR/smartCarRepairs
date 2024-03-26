import React, { useState } from "react";
import { Formik } from "formik";
import Button from "../../atoms/Button";
import { StyledForm } from "../../forms/styled";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
  Button as MaterialButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  garagesCollection,
  bookingsJobsCollection,
} from "../../../firebase/firestoreUtils";
import { useEffect } from "react";
import { FormElementWrapper } from "../../atoms/FormElement/StyledFormElement";
import {
  DateAndTimeWrapper,
  StyledFormControl,
  Label,
  FullWidthSelect,
  ButtonsWrapper,
} from "./StyledGarageAccept";

import generateHours from "../../../utils/generateHours";

const GarageAccept = ({ bookingJob }) => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startTimesArray, setStartTimesArray] = useState([]);
  const [endTimesArray, setEndTimesArray] = useState([]);
  const [showPlaces, setShowPlaces] = useState(false);
  const [places, setPlaces] = useState([]);

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      bookingsJobsCollection
        .doc(bookingJob.bookingId)
        .delete()
        .then(() => window.location.reload());
    }
  };

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  useEffect(() => {
    const effectDateFrom = new Date(
      dateFrom.getFullYear(),
      dateFrom.getMonth(),
      dateFrom.getDate()
    );

    const effectDateTo = new Date(
      dateTo.getFullYear(),
      dateTo.getMonth(),
      dateTo.getDate()
    );

    let finalStartHours = [];

    if (effectDateFrom.getTime() === today.getTime()) {
      const minHour = new Date().getHours();
      const minMinute = new Date().getMinutes();

      finalStartHours = generateHours(minHour, minMinute);

      setStartTimesArray(finalStartHours);
    } else {
      finalStartHours = generateHours(0, 0);

      setStartTimesArray(finalStartHours);
    }

    let finalEndHours = [];

    if (effectDateTo.getTime() > effectDateFrom.getTime()) {
      finalEndHours = generateHours(0, 0);
      setEndTimesArray(finalEndHours);
    } else if (startTime !== null) {
      const startTimeParts = startTime.split(":").map((el) => parseInt(el));
      if (startTimeParts[1] + 15 === 60) {
        finalEndHours = generateHours(startTimeParts[0] + 1, 0);
        setEndTimesArray(finalEndHours);
      } else {
        finalEndHours = generateHours(
          startTimeParts[0],
          startTimeParts[1] + 15
        );
        setEndTimesArray(finalEndHours);
      }
    }

    if (finalStartHours.indexOf(startTime) === -1) {
      setStartTime("");
    }

    if (finalEndHours.indexOf(endTime) === -1) {
      setEndTime("");
    }

    setShowPlaces(startTime && endTime);

    if (startTime && endTime) {
      garagesCollection.get().then((response) => {
        const numberOfSpaces = parseInt(
          response.docs.find((el) => el.id === bookingJob.garage).data().spaces
        );

        bookingsJobsCollection.get().then((response) => {
          const existBookings = response.docs
            .filter((el) => el.data().garage === bookingJob.garage)
            .map((el) => el.data());

          const availableSpaces = [];

          for (let i = 1; i <= numberOfSpaces; i++) {
            const selectedStart = new Date(
              `${dateFrom.getFullYear()}-${
                dateFrom.getMonth() + 1
              }-${dateFrom.getDate()} ${startTime}`
            );

            const selectedEnd = new Date(
              `${dateTo.getFullYear()}-${
                dateTo.getMonth() + 1
              }-${dateTo.getDate()} ${endTime}`
            );

            const isInExistBooking = existBookings.filter((el) => {
              const bookingStart = new Date(
                `${el.effectiveFrom} ${el.timeFrom}`
              ).getTime();
              const bookingEnd = new Date(
                `${el.effectiveUntil} ${el.timeTo}`
              ).getTime();

              return (
                (selectedStart.getTime() >= bookingStart &&
                  selectedStart.getTime() <= bookingEnd) ||
                (selectedEnd.getTime() >= bookingStart &&
                  selectedEnd.getTime() <= bookingEnd)
              );
            });

            const isInSelectedBooking = existBookings.filter((el) => {
              const bookingStart = new Date(
                `${el.effectiveFrom} ${el.timeFrom}`
              ).getTime();
              const bookingEnd = new Date(
                `${el.effectiveUntil} ${el.timeTo}`
              ).getTime();

              return (
                (bookingStart >= selectedStart.getTime() &&
                  bookingStart <= selectedEnd.getTime()) ||
                (bookingEnd >= selectedStart.getTime() &&
                  bookingEnd <= selectedEnd.getTime())
              );
            });

            if (
              !isInExistBooking.find((el) => el.spaceId === i) &&
              !isInSelectedBooking.find((el) => el.spaceId === i)
            ) {
              availableSpaces.push(i);
            }
          }

          setPlaces(availableSpaces);
        });
      });
    } else {
      setPlaces([]);
    }
    //when we add this comment then you tell to stop checking next line and elements in dependency array:
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFrom, dateTo, startTime, endTime]);

  useEffect(() => {
    if (dateFrom > dateTo) {
      setDateTo(dateFrom);
    }
  }, [dateFrom, dateTo]);

  return (
    <Formik
      initialValues={{
        spaceNo: "",
        estimatedCosts: "",
      }}
      onSubmit={(values, { resetForm }) => {
        if (!values.spaceNo) return;
        const data = {
          bookFrom: `${dateFrom.getFullYear()}-${
            dateFrom.getMonth() + 1 > 9
              ? dateFrom.getMonth() + 1
              : "0" + (dateFrom.getMonth() + 1)
          }-${dateFrom.getDate()}`,
          bookTo: `${dateTo.getFullYear()}-${
            dateTo.getMonth() + 1 > 9
              ? dateTo.getMonth() + 1
              : "0" + (dateTo.getMonth() + 1)
          }-${dateTo.getDate()}`,
          spaceNo: values.spaceNo,
          timeFrom: startTime,
          timeTo: endTime,
          estimatedCosts: values.estimatedCosts,
          status: "to_client_accept",
        };

        console.log(data);

        bookingsJobsCollection
          .doc(bookingJob.bookingId)
          .update(data)
          .then(() => window.location.reload());
      }}
    >
      {({ values, handleChange }) => (
        <StyledForm>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateAndTimeWrapper>
              <DesktopDatePicker
                label="Date From"
                inputFormat="dd/MM/yyyy"
                minDate={new Date()}
                value={dateFrom}
                onChange={(date) => setDateFrom(new Date(date))}
                renderInput={(params) => <TextField {...params} />}
                name="date_from"
              />
              <FormControl style={{ minWidth: "120px" }}>
                <InputLabel id="demo-simple-select-label">
                  Start Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Start time"
                  value={startTime}
                  name="hour_from"
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  {startTimesArray.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DateAndTimeWrapper>
            <DateAndTimeWrapper>
              <DesktopDatePicker
                label="Date To"
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => <TextField {...params} />}
                value={dateTo}
                minDate={dateFrom}
                onChange={(date) => setDateTo(new Date(date))}
              />
              {/* 235px */}
              <FormControl style={{ minWidth: "120px" }}>
                <InputLabel id="demo-simple-select-label">End Time</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="End time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  {endTimesArray.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DateAndTimeWrapper>
          </LocalizationProvider>

          {showPlaces && (
            <FormElementWrapper>
              <StyledFormControl>
                <Label style={{ color: "grey", marginLeft: "20px" }}>
                  space no.
                </Label>
                <FullWidthSelect
                  name="spaceNo"
                  label="Car space number"
                  required
                  onChange={handleChange}
                  value={values.spaceNo}
                >
                  {places.map((place, idx) => (
                    <MenuItem key={idx} value={place}>
                      {place}
                    </MenuItem>
                  ))}
                </FullWidthSelect>
              </StyledFormControl>
            </FormElementWrapper>
          )}
          <div style={{ width: "100%", marginLeft: "-10px" }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="estimatedCosts">Estimated costs</InputLabel>
              <OutlinedInput
                value={values.estimatedCosts}
                onChange={handleChange}
                name="estimatedCosts"
                id="estimatedCosts"
                required
                startAdornment={
                  <InputAdornment position="start">£</InputAdornment>
                }
                label="Estimated costs"
              />
            </FormControl>
          </div>
          <ButtonsWrapper>
            <Button type="submit">Accept booking</Button>
            <MaterialButton
              onClick={handleDeleteClick}
              type="button"
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete booking
            </MaterialButton>
          </ButtonsWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default GarageAccept;
