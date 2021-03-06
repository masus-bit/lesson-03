import React, { createRef } from "react";

export const Contact = () => {
  const element = createRef();
  return (
    <li className="contacts__item" ref={element}>
      <span className="contacts__name">oleg</span>
      <p className="contacts__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button
        className="contacts__button"
        onClick={() => {
          element.current.classList.toggle("contacts__item_active");
        }}
      >
        change BG
      </button>
    </li>
  );
};
