import React from "react";

import 
AboutUs,
Chef,
Contact,
Footer,
Gallery,
Header,
Intro,
Laurels,
SpecialMenu,
"./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
