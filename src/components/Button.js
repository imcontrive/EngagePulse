import React from "react";

export const Button = props => (
  <div
    className={`button-wrapper  ${props.theme}
    `}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
