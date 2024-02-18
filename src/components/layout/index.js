import style from "./layout.module.css";

export const PageLayout = ({ children }) => {
  return <div className={style.pageLayout}>{children}</div>;
};
