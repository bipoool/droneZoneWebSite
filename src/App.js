import React from "react";
import Navbar from "./components/Navbar";
import "./assets/App.css";
import Typography from "@mui/material/Typography";
import Footer from "./components/Footer";
import BlockM from "./components/BlockM";
import BlockL from "./components/BlockL";
import BlockR from "./components/BlockR";
import Contact from "./components/Card";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <BlockM />
        <Typography variant="h2" gutterBottom align="center">
          Features
        </Typography>
        <div id="Feature-1">
          <BlockL src={1} />
        </div>
        <div id="Feature-2">
          <BlockR />
        </div>
        <div id="Feature-3">
          <BlockL src={4} />
        </div>
        <div className="end">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
