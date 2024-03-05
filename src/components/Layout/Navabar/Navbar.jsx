import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import Hamburger from './Hamburger/Hamburger';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper d-flex">
        <div className="logo d-flex">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="nav__links d-flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav__active' : 'nav__link'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'nav__active' : 'nav__link'
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav__active' : 'nav__link'
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="nav__btns">
          <button className="btn--primary nav__contact--btn">Contact Me</button>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
