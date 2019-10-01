import React from "react";

export const ClearButton = props => (
  <div className={`clear-btn ${props.theme}`} onClick={props.handleClear}>
    {props.children}
  </div>
);
