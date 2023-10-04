import React from "react";
import ReactDOM from "react-dom/client";

/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>


*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
]);

//console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
//console.log(heading); // this will return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // takes object and converts to heading tag and puts in the DOM
*/

//////////////////////////////////////////////////////////////////////////////////
