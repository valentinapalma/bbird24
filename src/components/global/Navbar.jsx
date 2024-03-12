import '../../style/global/navbar.css';
import logo from '../../media/logo-mini.png';

const Navbar = () => {
  return (
    <div class="container py-2">
      <div class="row">
        <div class="col">
          <a href="/"><img src={logo} alt="Blackbird Recruitment Logo" width="60" /></a>
        </div>
        <div class="col align-self-center">
          <div class="hamburger-menu float-end">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <a className="menu__item" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="menu__item" href="applicants">
                  Applicants
                </a>
              </li>
              <li>
                <a className="menu__item" href="aboutus">
                  About Us
                </a>
              </li>
              <li>
                <a className="menu__item" href="employers">
                  Employers
                </a>
              </li>
              <li>
                <a className="menu__item" href="Services">
                  Services
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
