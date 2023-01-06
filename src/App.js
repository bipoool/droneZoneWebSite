import React from "react";
import Navbar from "./components/Navbar";
import "./assets/App.css";
import Typography from "@mui/material/Typography";
import Footer from "./components/Footer";
import Block from "./components/Block";
import Contact from "./components/Card";
const App = () => {
  const mainContent = {
    title : "Home of Drones" ,
    description : "Look for the magic in every moment.",
  }
  const content = [{
    title : "Trace Back" ,
    description : "Don't worry about your flying, Even if it gets lost, it is going to come back to you. Track the Drone With active GPS location.",
    id:"Trace-Back",
    type: "row"
  },
  {
    title : "Robust Design and Build" ,
    description : "High-Quality carbon fiber frame with a robust aerodynamic design will make your flights awesome",
    id:"Design",
    type: "row-reverse"
  },
  {
    title : "Futuristic Technology" ,
    description : "With a high performace 32-Bit CPU and effitient computations it gives great performance with less power consumptions",
    id:"Technology",
    type: "row"
  }];
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Block btn={"button"} img={4} dir={"row"} body={mainContent}/>
        <Typography variant="h2" gutterBottom align="center">
          Features
        </Typography>

        {
          content.map((e, id) => 
            <div id={e.id} key={id}>
              <Block btn={""} img={id+1} dir={e.type} body={e}/>
            </div>
          )
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
