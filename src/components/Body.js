import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types() {
  return (
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
        The BlackBoard, a chrome extension, is the right tool to jot down things
        at a common place and never loose them.
      </Typography>
    </Box>
  );
}
