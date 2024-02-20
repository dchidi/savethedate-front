import { BackIcon } from "../../../assets/icons";
import style from "./cards.module.css";
export const Card = ({ Component, hasNavigation = false }) => {
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

export const Card2 = ({ Component, hasNavigation = false }) => {
  return (
    <div className={style.card2}>
      <Component />
    </div>
  );
};
