import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Home() {
  return (
    <>
      <Typography variant="h2" style={{ margin: "10px" }}>
        Home
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Typography variant="h5">
            You can see the latest statistics about cases of covid-19 in the
            world. Simply go on Statistics page and choose a country, showing
            the location on map and covid information of the country. You can
            send email to us on Contact page in case you have inquiry
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
