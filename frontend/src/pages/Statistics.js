import React from "react";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Map from "../components/Map";
import CovidTable from "../components/CovidTable";

function Statistics() {
  const url = "http://localhost:8000/api/countries/";
  const [country, setCountry] = React.useState("World");
  const [options, setOptions] = useState([""]);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      await axios.options(url).then((res) => {
        let result = res.data.actions.POST.country.choices;
        // console.log(result);
        setOptions(result);
      });
    };
    getData();
  }, []);

  return (
    <>
      <Typography variant="h2" style={{ margin: "10px" }}>
        Statistics
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl sx={{ m: 1, width: { sm: 200, md: 400 } }}>
          <InputLabel>Country</InputLabel>
          <Select value={country} onChange={handleChange} label="Country">
            <MenuItem value="World">
              <em>world</em>
            </MenuItem>
            {options.map((item, i) => {
              return (
                <MenuItem key={i} value={item.display_name}>
                  {item.display_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Map location={country} />
        <CovidTable location={country} />
      </Grid>
    </>
  );
}

export default Statistics;
