import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { bookingDetailsData } from "../../../data/tableHeadsCells";

const getPropertyValue = (props, property) => {
  if (property.includes(".")) {
    const parts = property.split(".");
    return props[parts[0]][parts[1]];
  }
  return props[property];
};

const BookingDetails = ({ bookingJob }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "50%" }}>Description</TableCell>
            <TableCell style={{ width: "50%" }}>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingDetailsData.map((el) => (
            <TableRow
              key={el.label}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el.label}
              </TableCell>
              <TableCell>
                {el.property !== "imageUrl" ? (
                  getPropertyValue(bookingJob, el.property) || "-"
                ) : getPropertyValue(bookingJob, el.property) ? (
                  <img
                    style={{ width: "100%" }}
                    src={getPropertyValue(bookingJob, el.property)}
                    alt="Job description"
                  />
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingDetails;
