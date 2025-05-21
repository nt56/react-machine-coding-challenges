import React, { useState } from "react";
import "./App.css";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const App = () => {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <div>
      <h1>Hide and show Password</h1>

      <div class="container">
        <input
          type={showPassword ? "password" : "text"}
          name="user-password"
          placeholder="enter password"
          required
        />

        <button onClick={() => setShowpassword(!showPassword)}>
          {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
        </button>
      </div>
    </div>
  );
};

export default App;
