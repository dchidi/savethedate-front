import { BackIcon } from "../../../assets/icons";
import style from "./cards.module.css";
const Card = ({ Component, hasNavigation = false }) => {
  return (
    <div className={style.card}>
      {hasNavigation && (
        <div className={style.navigation}>
          <BackIcon size={30} />
        </div>
      )}

      <Component />
    </div>
  );
};

export default Card;
