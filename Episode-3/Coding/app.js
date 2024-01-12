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

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namaste React"),
//     React.createElement("h2", {}, "I'm h2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 Tag"),
//     React.createElement("h2", {}, "I'm h2 Tag"),
//   ]),
// ]);

//console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

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

///////////////////////EPISODE-3///////////////////////////////////////////////////////////

// React Element => object => when we render on DOM then it becomes HTML element

// const heading = React.createElement(
//   // this is core react
//   "h1",
//   { id: "heading" },
//   "Namaste-React core!!"
// );
// //console.log(heading); // object

// root.render(heading);

//////////////JSX//////////////////////////

// JSX- HTML like syntax

// JSX is converted to React.createElement => JS object => upon rendering => HTML element

const Heading = () => <h1 className="head">Namaste-React JSX</h1>; // functional comp
//const heading = <h1 className="head">Namaste React JSX react element </h1>; // this is react element

//console.log(heading); // also a object

// REACT FUNCTIONAL COMPONENT

// component composition: <Heading/> component dusre component ke andar hai(line 77)

const HeadingComponent = () => (
  <div id="container">
    <Heading />
    <h1 className="heading">Namaste-React Functional Component</h1>
  </div>
);

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // jsx(transpiled before reaches JS engine) -> done by Parcel with help of Babel

// now if we wanna render the functional component
//root.render(HeadingComponent); // not possible -> error

//root.render(<HeadingComponent />); // this will work

///                         ASSIGNMENT-3                //////// /////////////

// 1-Nested header element

// const headel = React.createElement("div", {}, [
//   React.createElement("h1", { class: "title" }, "h1 tag"),
//   React.createElement("h2", { class: "title" }, "h2 tag"),
//   React.createElement("h3", { class: "title" }, "h3 tag"),
// ]);

// 2- // using JSX

// const headEl = (
//   <div>
//     <h1 className="title">this is h1</h1>
//     <h2 className="title">this is h2</h2>
//     <h3 className="title">this is h3</h3>
//   </div>
// );

// 3- // functional component

// const Head = () => {
//   return (
//     <div>
//       <h1 className="title">H1</h1>
//       <h2 className="title">H2</h2>
//       <h3 className="title">H3</h3>
//     </div>
//   );
// };

// OR

// const Head = () => (
//   <div>
//     <h1 className="title">H1</h1>
//     <h2 className="title">H2</h2>
//     <h3 className="title">H3</h3>
//   </div>
// );

//4

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
