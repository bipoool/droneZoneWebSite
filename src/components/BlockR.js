import React from "react";
import Body from "./Body";
import Grid from "@mui/material/Grid";
export default function block() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        sm={12}
        md={5}
      >
        <Body />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <img src={require("../assets/images/drone2.png")} alt="react"></img>
      </Grid>
    </Grid>
  );
}
