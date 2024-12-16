import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExpertGirls from "./components/ExpertGirls";
import Traveller from "./components/Traveller";
import Expert from "./components/Expert";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <ExpertGirls/>
      <Traveller/>
      <Expert/>
    </>
  );
};

export default App;
