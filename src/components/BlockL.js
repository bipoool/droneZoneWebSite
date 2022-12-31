import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function block(props) {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        sm={12}
        md={5}
      >
        <div className="info">
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ fontWeight: "bold" }}
            >
              Drawing, A Proven Method For Better Memorizing Powers!
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
              The BlackBoard, a chrome extension, is the right tool to jot down
              things at a common place and never loose them.
            </Typography>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <img
          src={require(`../assets/images/drone${props.src}.png`)}
          alt="react"
        ></img>
      </Grid>
    </Grid>
  );
}
