import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function CovidTable(props) {
  // const url = `https://covid-19.dataflowkit.com/v1/${props.location}`;
  const url = `${process.env.REACT_APP_COVID_INFO_URL}${props.location}`;
  const [object, setObject] = useState([""]);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await axios.get(url).then((res) => {
        let result = res.data;
        //check the selected country data or world data from name
        setIsValid(
          props.location !== "World" && result["Country_text"] === "World"
            ? false
            : true
        );
        setObject(result);
      });
    };
    getData();
  }, [props]);

  return (
    <>
      {/* not showing table when api is not matched with selected country */}
      {!isValid && (
        <Typography variant="h3">No data from the country name</Typography>
      )}
      {isValid && (
        <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
          <Table sx={{ minWidth: 400 }} aria-label="Simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Total Cases</TableCell>
                <TableCell align="right">Total Deaths</TableCell>
                <TableCell align="right">Total Recovered</TableCell>
                <TableCell align="right">New Cases</TableCell>
                <TableCell align="right">New Deaths</TableCell>
                <TableCell align="right">Active Cases</TableCell>
                <TableCell align="right">Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {object["Country_text"]}
                </TableCell>
                <TableCell align="right">
                  {object["Total Cases_text"]}
                </TableCell>
                <TableCell align="right">
                  {object["Total Deaths_text"]}
                </TableCell>
                <TableCell align="right">
                  {object["Total Recovered_text"]}
                </TableCell>
                <TableCell align="right">{object["New Cases_text"]}</TableCell>
                <TableCell align="right">{object["New Deaths_text"]}</TableCell>
                <TableCell align="right">
                  {object["Active Cases_text"]}
                </TableCell>
                <TableCell align="right">{object["Last Update"]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default CovidTable;
