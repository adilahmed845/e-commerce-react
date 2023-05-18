import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="navbar">
      <div className="links">
        <Link className='login' onClick={()=>setLoggedIn(prev=>!prev)}>{loggedIn? 'Logout': 'Login'}</Link>
        <Link to="/"> Shop </Link>
        <Link to='/wishlist'>Wishlist</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
