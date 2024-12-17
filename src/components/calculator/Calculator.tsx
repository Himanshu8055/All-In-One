import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const buttons = ["7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", "00", ".", "="];

  const handleKeyInput = (e: any) => {
    const key = e.target.textContent;

    if (key === "AC") {
      setInput("");
    } else if (key === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === "X") {
      setInput((prev) => prev + "*");
    } else if (key === "=") {
      try {
        const result = new Function("return " + input)();
        setInput(result === Infinity || result === -Infinity ? "Error" : result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => validateInput(prev + key));
    }
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInput(validateInput(value));
  };

  const validateInput = (value: string) => {
    // Remove invalid characters
    value = value.replace(/[^0-9.+\-*/]/g, "");

    // Prevent consecutive operators
    value = value.replace(/([+\-*/.])\1+/g, "$1");

    // Prevent multiple dots in a number
    const parts = value.split(/([+\-*/])/);
    return parts
      .map((part) => (part.match(/\./g)?.length > 1 ? part.replace(/\.+/g, ".") : part))
      .join("");

    // Prevent leading zeros
    if (/^0[0-9]/.test(value)) {
      value = value.replace(/^0+/, "0");
    }
    return value;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-500 via-gray-500 to-gray-500 p-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white bg-opacity-20 rounded-3xl shadow-lg overflow-hidden border border-white border-opacity-30">
        <div className="p-6 space-y-6">
          {/* Display */}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="0"
            className="text-right text-3xl font-light mb-4 bg-transparent border-none text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-0"
          />
          {/* Buttons */}
          <div className="grid grid-cols-4 gap-3">
            <button
              onClick={handleKeyInput}
              className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-2xl transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              AC
            </button>
            <button
              onClick={handleKeyInput}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-2xl transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              DEL
            </button>
            <button
              onClick={handleKeyInput}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              /
            </button>
            {buttons.map((key) => (
              <button
                key={key}
                onClick={handleKeyInput}
                className={`${
                  ["+", "-", "X", "/"].includes(key)
                    ? "bg-blue-500 hover:bg-blue-600"
                    : key === "="
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-800"
                } text-white font-bold py-4 rounded-2xl transition-all duration-200 ease-in-out transform hover:scale-105`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
