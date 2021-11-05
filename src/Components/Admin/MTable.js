import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { RiWindowsFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { listAdminAttendace } from "../../actions/attendaceActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
    marginLeft: "5rem",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#fc3d42",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function MTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [pic, setPic] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [attendacelist, updateAttendaceList] = useState([]);

  const Fetch = () => {
    const url = "http://localhost:5000/api/attendace/admin";
    fetch(url)
      .then((response) => response.json())
      .then((result) => updateAttendaceList(result));
  };

  useEffect(() => {
    Fetch();
  }, [Link]);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              Employee Name
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Login Time
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Lunch Start
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Lunch End</TableCell>
            <TableCell className={classes.tableHeaderCell}>Logout</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendacelist
            .reverse()
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((xattendace, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={15}>
                        <Typography className={classes.name}>
                          {xattendace.name}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {xattendace.department}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {xattendace?.createdAt.substring(0, 10)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {xattendace.logintime}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {xattendace?.lunchstart}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {xattendace?.lunchend}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {xattendace?.logout}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (xattendace.currentstatus === "Present" && "green") ||
                          (xattendace.currentstatus === "Leave" && "orange") ||
                          (xattendace.currentstatus === "CL" && "orange"),
                      }}
                    >
                      {xattendace?.currentstatus}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <Link to={`/admin/data/${xattendace._id}`}>
                          <EditIcon />
                        </Link>
                      </Box>
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TableFooter>
        <TablePagination
          rowsPerPageOptions={[2, 4]}
          component="div"
          count={attendacelist.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableFooter>
    </TableContainer>
  );
}
export default MTable;
