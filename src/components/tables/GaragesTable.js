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
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { garagesCollection } from "../../firebase/firestoreUtils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { openModal } from "../../redux/actions";

import usePagination from "../../hooks/usePagination";
import TableHeadWrapper from "./TableHeadWrapper";
import { garagesHeadCells } from "../../data/tableHeadsCells";

const CarParkTable = () => {
  const [garages, setGarages] = React.useState([]);

  const [
    { dense, order, orderBy, page, rowsPerPage, visibleRows },
    {
      handleRequestSort,
      stableSort,
      getComparator,
      handleChangePage,
      handleChangeRowsPerPage,
      emptyRows,
      handleClick,
    },
  ] = usePagination(garages);

  const dispatch = useDispatch();
  useEffect(() => {
    garagesCollection.get().then((response) => {
      setGarages(response.docs.map((el) => ({ id: el.id, ...el.data() })));
    });
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
              headCells={garagesHeadCells}
            />
            <TableBody>
              {stableSort(visibleRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.town}</TableCell>
                      <TableCell align="left">{row.spaces}</TableCell>
                      <TableCell align="left">
                        <Tooltip title="Edit">
                          <IconButton
                            onClick={() =>
                              dispatch(openModal("editCarPkAdmin", row))
                            }
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
                                openModal(
                                  "delete",
                                  "garages",
                                  "garages",
                                  row.id
                                )
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
                <TableRow>
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

export default CarParkTable;
