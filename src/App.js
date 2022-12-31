import React from "react";
import Navbar from "./components/Navbar";
import "./assets/App.css";
import Typography from "@mui/material/Typography";
import Footer from "./components/Footer";
import Block from "./components/Block";
import Contact from "./components/Card";
const App = () => {
  const content = {
    title : "Drawing, A Proven Method For Better Memorizing Powers!" ,
    description : "The BlackBoard, a chrome extension, is the right tool to jot down things at a common place and never loose them."
  }
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Block btn={"button"} img={2} dir={"row"} body={content}/>
        <Typography variant="h2" gutterBottom align="center">
          Features
        </Typography>
        <div id="Feature-1">
        <Block btn={""} img={1} dir={"row-reverse"} body={content}/>
        </div>
        <div id="Feature-2">
        <Block btn={""} img={3} dir={"row"} body={content}/>
        </div>
        <div id="Feature-3">
        <Block btn={""} img={4} dir={"row-reverse"} body={content}/>
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
