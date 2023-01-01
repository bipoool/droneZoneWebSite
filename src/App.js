import React from "react";
import Navbar from "./components/Navbar";
import "./assets/App.css";
import Typography from "@mui/material/Typography";
import Footer from "./components/Footer";
import Block from "./components/Block";
import Contact from "./components/Card";
const App = () => {
  const content = [{
    title : "Drawing, A Proven Method For Better Memorizing Powers!" ,
    description : "The BlackBoard, a chrome extension, is the right tool to jot down things at a common place and never loose them.",
    type: "row"
  },
  {
    title : "Drawing, A Proven Method For Better Memorizing Powers!" ,
    description : "The BlackBoard, a chrome extension, is the right tool to jot down things at a common place and never loose them.",
    type: "row-reverse"
  },
  {
    title : "Drawing, A Proven Method For Better Memorizing Powers!" ,
    description : "The BlackBoard, a chrome extension, is the right tool to jot down things at a common place and never loose them.",
    type: "row"
  }];
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Block btn={"button"} img={4} dir={"row"} body={content[0]}/>
        <Typography variant="h2" gutterBottom align="center">
          Features
        </Typography>

        {
          content.map((e, id) => (
            <div id={`Feature-${id+1}`}>
              <Block btn={""} img={id+1} dir={e.type} body={e}/>
            </div>
          ))
        }
  
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
