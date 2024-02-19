import style from "./inputs.module.css";

const InputField = ({ inputType = "text", label = "" }) => {
  return (
    <div>
      {label && <p>label here</p>}
      <input type={inputType} />
    </div>
  );
};

export { InputField };
