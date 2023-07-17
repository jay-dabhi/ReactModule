//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";

import ReactDom from "react-dom";

const tarikh = new Date();
const year = tarikh.getFullYear();

const name = "Jay Dabhi";

// ReactDom.render(<h1>Helo</h1>, document.getElementById("root"));

ReactDom.render(
  <div>
    <h1 className="heading">Hello</h1>
    <p>{year}</p>
    <p> {name}</p>
  </div>,
  document.getElementById("root")
);
