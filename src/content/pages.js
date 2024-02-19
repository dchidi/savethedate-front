import { InputField } from "../components/common/inputs";
import style from "./pages.module.css";

const Login = () => {
  return (
    <div className={style.page1}>
      <div>Save the date 11-05-2024.</div>
      <div className={style.form}>
        <InputField
          label="Invitation PassCode"
          placeholder="Enter your 6 digit code"
        />
        <p className={style.message}>
          Please pre-order your meals for the marriage dinner party to ensure a
          smooth and enjoyable dining experience.
        </p>
      </div>
    </div>
  );
};
const Page1 = () => {
  return <div className={style.page1}>welcome</div>;
};
const Page2 = () => {
  return <div>page2</div>;
};

export { Login, Page1, Page2 };
