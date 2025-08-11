import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="bg-[#000814] text-white py-16 shadow-lg">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hi, I'm <span className="text-[#FFC300]">Abisha Iqbal Gill</span>
        </h1>
        <p className="text-xl opacity-90">
          BSCS Student at Muhammad Ali Jinnah University
        </p>
        <div className="mt-5">
          <a
            href="/Abisha Iqbal Gill Resume.pdf"
            download
            className="items-center border border-rounded rounded-2xl p-2 hover:text-[#FFC300]  "
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
