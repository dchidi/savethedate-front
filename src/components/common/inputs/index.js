import { useState } from "react";
import style from "./inputs.module.css";

const InputField = ({
  inputType = "text",
  label = "",
  classes = "",
  placeholder = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    const userInput = event.target.value.replace(/-/g, "").toUpperCase(); // Remove existing dashes
    let formattedInput = "";
    // Apply formatting, re-adding the dash only between the first two characters and the rest
    if (userInput.length > 2) {
      formattedInput = `${userInput.substring(0, 2)}-${userInput.substring(2)}`;
    } else {
      formattedInput = userInput;
    }
    if (formattedInput.length === 7) {
      console.log(`call api and pass ${formattedInput}`);
    }
    setInputValue(formattedInput.trim());
  };

  return (
    <div>
      {label && <p className={style.label}>{label}</p>}
      <input
        type={inputType}
        className={`${style.input} ${classes}`}
        placeholder={placeholder}
        onChange={inputHandler}
        value={inputValue}
      />
    </div>
  );
};

export { InputField };
