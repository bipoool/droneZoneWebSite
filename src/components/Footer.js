import * as React from "react";
import Typography from "@mui/material/Typography";
import { ReactComponent as Svg } from "../assets/images/drone.svg";
export default function Footer() {
  return (
    <>
      <div className="icon">
        <Svg height="80px" width="80px" />
      </div>
      <div className="trademark">
        <Typography variant="h6" gutterBottom align="right">
          &copy; 2023, All Rights Reserved
        </Typography>
      </div>
    </>
  );
}
