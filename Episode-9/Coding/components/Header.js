import { Link } from "react-router-dom";
import { Logo_URL } from "../constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
//let btnName = "Login";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              //console.log("btn called");
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
