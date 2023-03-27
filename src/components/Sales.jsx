import React from "react";
import { Item, Title } from "./utils";

const Sales = ({ title, items, isExists }) => {
  return (
    <>
      <div className={`nike-container ${isExists ? "mt-7" : ""}`}>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  sm:grid-cols-1 gap-7 lg:gap-5 mt-7 ${
            isExists
              ? "grid-cols-3 xl:grid-cols-2 md:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2"
          }`}
        >
          {items.map((item) => {
            return <Item key={item.id} {...item} isExists={isExists} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sales;
