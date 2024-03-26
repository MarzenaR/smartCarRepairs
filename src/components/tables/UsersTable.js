import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";
import { usersCollection } from "../../firebase/firestoreUtils";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { usersHeadCells } from "../../data/tableHeadsCells";
import TableHeadWrapper from "./TableHeadWrapper";
import usePagination from "../../hooks/usePagination";

const UsersTable = () => {
  const dispatch = useDispatch();

  const [usersList, setUsersList] = React.useState([]);

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
  ] = usePagination(usersList);

  useEffect(() => {
    usersCollection.get().then((response) => {
      setUsersList(response.docs.map((el) => el.data()));
    }, []);
  }, []);

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
              headCells={usersHeadCells}
            />
            <TableBody>
              {stableSort(visibleRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">
                        {row.firstName} {row.surname}
                      </TableCell>
                      <TableCell align="left">{row.role}</TableCell>

                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        {row.phoneNumber || "-"}
                      </TableCell>

                      <TableCell align="left">
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() => dispatch(openModal("edit", row))}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>

                      <TableCell align="left">
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() =>
                              dispatch(
                                openModal("delete", "user", "users", row.userId)
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
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

export default UsersTable;
