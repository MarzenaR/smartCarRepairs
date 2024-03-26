import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  bookingsJobsCollection,
  garagesCollection,
  usersCollection,
} from "../../firebase/firestoreUtils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";
import { bookingsJobsHeadCells } from "../../data/tableHeadsCells";
import TableHeadWrapper from "./TableHeadWrapper";
import Button from "../atoms/Button";
import usePagination from "../../hooks/usePagination";

const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const [garages, setGarages] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state);

  const [
    { dense, order, orderBy, page, rowsPerPage, visibleRows },
    {
      handleRequestSort,
      stableSort,
      getComparator,
      handleChangePage,
      handleChangeRowsPerPage,
      emptyRows,
    },
  ] = usePagination(bookings);

  useEffect(() => {
    if (currentUser.role === "admin") {
      bookingsJobsCollection.get().then((response) => {
        setBookings(
          response.docs.map((el) => ({ bookingId: el.id, ...el.data() }))
        );
      });
    } else {
      bookingsJobsCollection
        .where("userId", "==", currentUser.userId)
        .get()
        .then((response) => {
          setBookings(
            response.docs.map((el) => ({ bookingId: el.id, ...el.data() }))
          );
        });
    }

    garagesCollection.get().then((response) => {
      setGarages(
        response.docs.map((el) => {
          return { ...el.data(), id: el.id };
        })
      );
    });

    if (currentUser.role === "admin") {
      usersCollection.get().then((response) => {
        setUsers(
          response.docs.map((el) => {
            return { ...el.data(), id: el.id };
          })
        );
      });
    }
  }, [currentUser.userId, currentUser.role]);

  const getGarage = (id) => garages.find((garage) => garage.id === id);
  const getUser = (id) => users.find((user) => user.userId === id);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <TableHeadWrapper
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={bookingsJobsHeadCells}
            />
            <TableBody>
              {stableSort(visibleRows, getComparator(order, orderBy))
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell component="th" scope="row" padding="none">
                        {currentUser.role === "admin" ? (
                          <>
                            {getUser(row.userId)?.firstName || "-"}{" "}
                            {getUser(row.userId)?.surname}
                          </>
                        ) : (
                          <>
                            {currentUser.firstName} {currentUser.surname}
                          </>
                        )}
                      </TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        {getGarage(row.garage)?.name} -{" "}
                        {getGarage(row.garage)?.town}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {row.carProducer} {row.carModel}
                      </TableCell>

                      <TableCell align="left">
                        {row.bookFrom ? (
                          <>
                            {row.bookFrom} {row.timeFrom}
                          </>
                        ) : (
                          <>-</>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {row.bookTo ? (
                          <>
                            {row.bookTo} {row.timeTo}
                          </>
                        ) : (
                          <>-</>
                        )}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {row.estimatedCosts ? row.estimatedCosts + "£" : "-"}
                      </TableCell>

                      <TableCell align="left">
                        <Button
                          onClick={() =>
                            dispatch(
                              openModal(
                                "bookingDetails",

                                {
                                  ...row,
                                  client: getUser(row.userId),
                                  garage: getGarage(row.garage),
                                },

                                "bookings_jobs",
                                row.id
                              )
                            )
                          }
                        >
                          Show details
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        {currentUser.role === "admin" && (
                          <>
                            {row.status === "to_garage_accept" ? (
                              <Button
                                onClick={() =>
                                  dispatch(
                                    openModal(
                                      "garageAccept",
                                      row,
                                      "bookings_jobs",
                                      row.id
                                    )
                                  )
                                }
                              >
                                Accept
                              </Button>
                            ) : row.status === "to_client_accept" ? (
                              <>
                                Waiting for <br /> client accept
                              </>
                            ) : (
                              <>Accepted</>
                            )}
                          </>
                        )}
                        {currentUser.role === "user" && (
                          <>
                            {row.status === "to_client_accept" ? (
                              <Button
                                onClick={() =>
                                  dispatch(
                                    openModal(
                                      "clientAccept",
                                      row,
                                      "bookings_jobs",
                                      row.id
                                    )
                                  )
                                }
                              >
                                Accept Job
                              </Button>
                            ) : row.status === "to_garage_accept" ? (
                              <>
                                Waiting for <br /> garage accept
                              </>
                            ) : (
                              <>Job Accepted</>
                            )}
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={visibleRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default BookingsTable;
