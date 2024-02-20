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

      <div className={style.scroll}>
        <Component />
      </div>
    </div>
  );
};

export default Card;
