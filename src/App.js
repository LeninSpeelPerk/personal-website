import React from "react";
import {
  Header,
  About,
  Specilizing,
  Resume,
  Portfolio,
  Testimonal,
  OrangeBar,
  Blog,
  Contact,
  Footer,
} from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Specilizing />
      <Resume />
      <Portfolio />
      <Testimonal />
      <OrangeBar />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
