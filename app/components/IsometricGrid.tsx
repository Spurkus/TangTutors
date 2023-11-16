import React from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const IsometricGrid = () => {
  const gridStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    height: "8.5rem",
  };

  return (
    <div
      className="max-w-4xl grid bg-white text-black rounded-box place-items-center text-center text-lg font-bold py-4 px-4"
      style={gridStyle}>
      Mathematical Methods and Specialist <br />
      <BlockMath>
        {
          "\\lim_{n\\rightarrow\\infty} \\sum^n_{i=1} f(x_i) \\Delta x = \\int^a_b f(x) \\, dx"
        }
      </BlockMath>
    </div>
  );
};

export default IsometricGrid;
