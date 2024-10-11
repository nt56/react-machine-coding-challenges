import { useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="flex flex-col gap-5  items-center  h-screen">
      <h1 className="font-extrabold text-3xl">QR Code Generator</h1>

      <div className="flex gap-5 items-center justify-center">
        <input
          type="text"
          name="qr-code"
          placeholder="your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="m-5 p-3 w-[500px] rounded-lg text-black border border-black"
        />
        <button
          className="m-5 p-3 w-28 rounded-lg bg-black text-white font-bold"
          onClick={handleGenerateCode}
        >
          Generate
        </button>
      </div>

      <div className="flex items-center justify-center mt-5">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default App;
