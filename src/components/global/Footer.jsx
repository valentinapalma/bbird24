import styles from '../../style/global/footer.module.css';
import birdgif from '../../media/bird.gif';
import linkedin from '../../media/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer + ' container-fluid'}>
      <div className="row">
        <div className="col text-center">
          <img src={birdgif} alt="gif of a bird flying" width="200" />
          <h3 className="mb-3">Want to hear more over a cup of coffee?</h3>
          <p>
            <a href="tel:0041447208000" title="Let's chat over a cup of coffee" className="text-decoration-none">
              +41 (0) 44 720 80 00
            </a>
          </p>
          <p>
            <a href="mailto:info@bbird.ch" title="Email us for more information" className="text-decoration-none">
              info@bbird.ch
            </a>
          </p>
          <p>Seestrasse 185A, 8800 Thalwil, Zürich</p>
          <a
            href="https://linkedin.com/company/blackbird-talentsolutions"
            rel="nofollow"
            title="Connect via our LinkedIn page"
          >
            <img src={linkedin} alt="linkedin logo" width="50" />
          </a>
          <p className="small mt-5">Blackbird Recruitment®, 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
