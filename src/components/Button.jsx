import React, { useState } from "react";

const Button = () => {
  const [isDark, setIsDark] = useState(false);
  return <div className="border rounded-lg p-2 cursor-pointer">Button</div>;
};

export default Button;
