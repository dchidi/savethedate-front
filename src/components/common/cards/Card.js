import style from "./cards.module.css";
const Card = ({ data }) => {
  return <div className={style.card}>{data.title}</div>;
};

export default Card;
