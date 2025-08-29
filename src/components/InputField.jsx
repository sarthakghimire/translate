import { useState } from "react";

function InputField({ onTextChange }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Enter text to translate"
      rows="4"
      cols="50"
      style={{ width: "100%", padding: "10px" }}
    />
  );
}

export default InputField;

import React from "react";
