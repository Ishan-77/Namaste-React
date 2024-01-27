import { Logo_URL } from "../constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
