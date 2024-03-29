import { Login, Page1, Page2 } from "../../../content/pages";
import { Card, Card2 } from "./Card";
import { useState } from "react";

const CardStack = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const page_loader = (index) => {
    switch (index) {
      case 0:
        return <Card Component={Login} />;
      case 1:
        return <Card2 hasNavigation={true} Component={Page1} />;
      case 2:
        return <Card hasNavigation={true} Component={Page2} />;
    }
  };

  return <div>{page_loader(pageIndex)}</div>;
};

export default CardStack;
