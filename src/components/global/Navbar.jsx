import '../../style/global/navbar.css';
import logo from '../../media/logo-mini.png';

const Navbar = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col">
          <a href="/"><img src={logo} alt="Blackbird Recruitment Logo" width="80" /></a>
        </div>
        <div className="col align-self-center">
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <a className="menu__item" href="employers">
                  Employers
                </a>
              </li>
              <li>
                <a className="menu__item" href="applicants">
                  Applicants
                </a>
              </li>
              <li>
                <a className="menu__item" href="Services">
                  Services
                </a>
              </li>
              <li>
                <a className="menu__item" href="aboutus">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
