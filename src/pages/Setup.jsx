import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import SetupMain from "../components/setup/SetupMain"

const Setup = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Navbar />
      <SetupMain/>
      <Footer />
    </div>
  );
};

export default Setup;
