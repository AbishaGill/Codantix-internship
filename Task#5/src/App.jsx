import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import WaveDivider from "./components/WaveDivider";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <WaveDivider topColor="#F297E6" bottomColor="#F7CB46" />
        <Services />
        <WaveDivider topColor="#F7CB46" bottomColor="#000000" />
        <Footer />
      </div>
    </>
  );
};

export default App;
