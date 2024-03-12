import bird from '../../media/bird.gif';
import Circles from '../global/Circles';
import styles from '../../style/pages.module.css';

const Hero = () => {
    return (
      <div className={styles.hero + " container py-5 mb-5"}>
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-6">
            <h1>Blackbird Recruitment</h1>
            <p>The human at the core of everything we do</p>
          </div>
          <div className="col-12 col-lg-6 h-100 position-relative">
            <Circles image imgSrc={bird} />
          </div>
        </div>
      </div>
    )
}

export default Hero;