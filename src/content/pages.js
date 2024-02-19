import { InputField } from "../components/common/inputs";
import style from "./pages.module.css";

const Login = () => {
  return (
    <div className={style.page1}>
      <div>writeup with couples name and date of event</div>
      <div className={style.form}>
        <InputField />
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
