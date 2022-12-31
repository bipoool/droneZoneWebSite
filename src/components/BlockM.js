import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function block() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center "
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
        <div className="button">
          <Button variant="contained" size="large" center>
            We Are Hiring!
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <img src={require("../assets/images/drone2.png")} alt="react"></img>
      </Grid>
    </Grid>
  );
}
