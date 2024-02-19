import Card from "./Card";
import style from "./cards.module.css";

const CardStack = ({ pages = [] }) => {
  return (
    <>
      {pages.map((page, index) => (
        <Card data={page} />
      ))}
    </>
  );
};

export default CardStack;
