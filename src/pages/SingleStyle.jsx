import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import MainSection from "../components/SingleStyleInfo/MainSection";
import allStyles from "../assets/info";
const SingleStyle = () => {
  const { id } = useParams();
  const currentStyle = allStyles.find((s) =>{
console.log(s);
  return s._id.toString() === id

});
  console.log(currentStyle);
  console.log(id);
  return (
    <div className="w-full h-screen">
      <Navbar />
      <MainSection details={currentStyle} />
      <Footer />
    </div>
  );
};

export default SingleStyle;
