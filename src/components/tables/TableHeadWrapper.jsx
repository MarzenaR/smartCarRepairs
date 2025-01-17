import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const TableHeadWrapper = ({order, orderBy, onRequestSort, headCells}) => {
      const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
      };

      return (
        <TableHead>
          <TableRow style={{background: '#ffaf9b'}}>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                {headCell.disableSorting ? <>{headCell.label}</> : <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>}
                
                
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
    }


export default TableHeadWrapper;