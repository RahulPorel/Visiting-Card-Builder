import { useState } from "react";

export default function RandomColorTemp(props) {
  const [color, setColor] = useState("#000");
  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const handleColorGenerate = () => {
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(color.r, color.g, color.b));
  };

  return (
    <div style={{ backgroundColor: color }} className="container">
      <button style={{ color: color }} onClick={handleColorGenerate}>
        {color}
      </button>
    </div>
  );
}
