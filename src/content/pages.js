import { dinning } from "../assets/image";
import { InputField } from "../components/common/inputs";
import style from "./pages.module.css";

const Login = () => {
  return (
    <div className={style.page1}>
      <p className={style.topLabel}>Save the date 11-05-2024.</p>
      <div className={style.form}>
        <InputField
          label="Invitation PassCode"
          placeholder="Enter your 6 digit code"
        />
        <p className={style.message}>
          Please pre-order your meals for the marriage after party to ensure a
          smooth and enjoyable dining experience.
        </p>
      </div>
    </div>
  );
};
const Page1 = () => {
  return (
    <div className={style.page1}>
      <img src={dinning} className={style.image} />

      <div className={style.content}>
        <h2>Guest List</h2>
        <ul>
          <li>James Ugo</li>
          <li>Tega Ugo</li>
          <li>Chidiukwu Ogadinma Duru</li>
          <li>James Ugo</li>
          <li>Tega Ugo</li>
          <li>Chidiukwu Ogadinma Duru</li>
          <li>James Ugo</li>
        </ul>
      </div>
    </div>
  );
};
const Page2 = () => {
  return <div>page2</div>;
};

export { Login, Page1, Page2 };
