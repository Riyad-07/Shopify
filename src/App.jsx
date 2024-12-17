import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExpertGirls from "./components/ExpertGirls";
import Traveller from "./components/Traveller";
import Expert from "./components/Expert";
import Plan from "./components/Plan";
import Membar from "./components/Membar";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <ExpertGirls/>
      <Traveller/>
      <Expert/>
      <Plan/>
      <Membar/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default App;
