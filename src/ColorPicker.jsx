import { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#dddddd");
  const [toggle, setToggle] = useState(false);
  const toggleColorPlatte = () => {
    setToggle(!toggle);
  };

  const handleColorPlatte = (color) => {
    setColor(color.hex)
  }

  const handleRandomColor = () => {
    let hexColor = "#";
    const hexChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexChar.length);
      hexColor += hexChar[randomIndex];
    }
    setColor(hexColor);
  };
  return (
    <div>
      <div style={{ backgroundColor: color }} className="min-h-96 flex justify-center items-center">
        <div className="bg-gray-800 max-w-[400px] rounded-md p-4">
          <h1 style={{color: color}} className="text-4xl font-bold mb-2">React color picker</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit quaerat amet, qui quos quidem nisi minus consequatur expedita. Laborum!</p>
          <a href="https://casesandberg.github.io/react-color/" className="mt-4 inline-block py-1 px-3 rounded-md bg-gray-300 text-gray-800">Learn more</a>
        </div>
      </div>
      {toggle && <div className="absolute top-3 right-3">
          <SketchPicker
            color={color}
            onChangeComplete={handleColorPlatte}
          />
        </div>}
      <div className="text-center mt-12 space-x-4">
        <button
          onClick={toggleColorPlatte} 
          className="py-1 px-4 rounded-md bg-gray-600 ring ring-gray-400"
        >
          Color platte
        </button>
        <button
          onClick={handleRandomColor}
          className="py-1 px-4 rounded-md bg-gray-600 ring ring-gray-400"
        >
          Random color
        </button>
        <div className="text-center mt-3">
          <p className="font-bold text-sm">Hex: {color}</p>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
