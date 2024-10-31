import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function LeaderBoard() {
  const [admins, setAdmins] = useState([]);
  
  useEffect(() => {
    // Fetch all admins data
    axios.get("https://ask-backend-livid.vercel.app/admin/leaderboard/", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // Sort the data by 'points' in descending order
        const sortedData = response.data.sort((a, b) => b.points - a.points);
        setRows(sortedData);
      })
      .catch((error) => console.error("Error fetching admin data:", error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Branch</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.year}</StyledTableCell>
              <StyledTableCell align="right">{row.branch}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderBoard;
