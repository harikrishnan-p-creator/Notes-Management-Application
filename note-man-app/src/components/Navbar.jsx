import {Link} from "react-router-dom"
function Navbar(){
  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo-Photoroom.png" alt="" /></div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notes">My Notes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="sign"><Link to="/signin">Sign In</Link></button>
      
    </nav>
  );
}

export default Navbar;