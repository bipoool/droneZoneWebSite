import * as React from "react";
import Typography from "@mui/material/Typography";
import { ReactComponent as Svg } from "../assets/images/drone.svg";
export default function Footer() {
  return (
    <>
      <div className="icon">
        <Svg height="100px" width="100px" />
      </div>
      <div className="trademark">
        <Typography variant="h5" gutterBottom align="right">
          &copy; 2022, All Rights Reserved
        </Typography>
      </div>
    </>
  );
}
