import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="overflow-x-hidden antialiased text-neutral-800 ">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
