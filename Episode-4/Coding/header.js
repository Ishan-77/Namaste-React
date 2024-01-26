import React from "react";
import ReactDOM from "react-dom/client";

// Q Create header component from scratch:

const Header = () => {
  return (
    <div className="container">
      <div className="logo container">
        <img
          className="left"
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="React-image"
        />
      </div>
      <div className="search container">
        <input type="text" placeholder="Search..." />
        <button type="submit">Submit</button>
      </div>
      <div className="user container">
        <img
          className="right"
          src="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-31634946729lnhivlto5f.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
