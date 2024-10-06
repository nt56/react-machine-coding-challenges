import { useState } from "react";

const App = () => {
  const [typeOfColor] = useState("hex");
  const [color, setColor] = useState("white");

  //generates random number
  const getRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    var hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandom(hex.length)];
    }

    setColor(hexColor);
  };

  const handleGenerateRandomRGBColor = () => {
    var r = getRandom(255);
    var g = getRandom(255);
    var b = getRandom(255);

    setColor(`rgb(${r},${g},${b})`);
  };

  const handleGenerateRandomColor = () => {
    const colorArr = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
      "black",
      "white",
      "cyan",
      "magenta",
      "lime",
      "indigo",
      "violet",
    ];

    let color = colorArr[getRandom(colorArr.length)];
    setColor(color);
  };

  return (
    <div
      className="h-screen w-screen flex flex-col"
      style={{ background: color }}
    >
      <div className="flex gap-10">
        <button
          className="p-5 m-10 font-bold bg-red-700 rounded-xl text-white mx-auto h-fit"
          onClick={handleGenerateRandomHexColor}
        >
          Generate Hex Color
        </button>

        <button
          className="p-5 m-10 font-bold bg-red-700 rounded-xl text-white mx-auto h-fit"
          onClick={handleGenerateRandomRGBColor}
        >
          Generate RGB Color
        </button>

        <button
          className="p-5 m-10 font-bold bg-red-700 rounded-xl text-white mx-auto h-fit"
          onClick={handleGenerateRandomColor}
        >
          Generate Color
        </button>
      </div>

      <h1 className="my-auto mx-auto font-bold text-3xl text-white">
        {typeOfColor === "hex" ? `color - ${color}` : `color - ${color}`}
      </h1>
    </div>
  );
};

export default App;
