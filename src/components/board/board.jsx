import React from "react";
import { Contact } from "../contact/contact";

import "./board.css";
export const Board = () => {
  const ARR_LENGTH = 5;
  return (
    <div className="container">
      <ul className="container__contacts contacts">
        {new Array(ARR_LENGTH).fill("").map(() => {
          return <Contact />;
        })}
      </ul>
    </div>
  );
};
