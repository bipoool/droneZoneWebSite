import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function block(props) {
  return (
    <Grid container direction={"" + props.dir} justifyContent="center" alignItems="center">
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
             {props.body.title}
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
              {props.body.description}
            </Typography>
          </Box>
        </div>
        {props.btn === "button" ? (<div className="button">
          <Button variant="contained" size="large" center sx={{my: 3}}>
            We Are Hiring!
          </Button>
        </div>) : null}
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <img src={require(`../assets/images/drone${props.img}.png`)} alt="react"></img>
      </Grid>
    </Grid>
  );
}
