import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, [
      React.createElement("h2", { id: "child1_1" }, "I'm an h2 tag"),
      React.createElement("h2", { id: "child1_2" }, "I'm an h2 tag"),
    ]),
    React.createElement("h2", { id: "child2" }, [
      React.createElement("h1", { id: "child2_0" }, [
        React.createElement("h2", { id: "child2_1" }, "I'm an h2 tag"),
        React.createElement("h2", { id: "child2_2" }, "I'm an h2 tag"),
      ]),
    ])
  ])
);

const heading = React.createElement(
  "h1",
  {
    id: "headingEle",
    type: "h1",
  },
  "Hello world from javascript!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
