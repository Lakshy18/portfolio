import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="logo">
          <span>&lt;</span>
          <span>लक्ष्यराज सिंह डोडिया</span>
          <span>/ &gt;</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="navLinks">
          Home
        </Link>
        <Link to="/education" className="navLinks">
          Education
        </Link>
        <Link to="/projects" className="navLinks">
          Projects
        </Link>
        <Link to="/certificates" className="navLinks">
          Certificates
        </Link>
        <Link to="/contact" className="navLinks">
          Contact
        </Link>
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
