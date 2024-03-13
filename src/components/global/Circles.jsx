import styles from '../../style/global/circles.module.css';

const Circles = ({ imgSrc, altTxt }) => {
  return (
    <div className={styles.circleContainer + " position-relative"}>
      <span className={styles.smallCircle}></span>
      <span className={styles.bigCircle}>
        {imgSrc ? <img src={imgSrc} alt={altTxt} /> : null}
      </span>
    </div>
  );
};

export default Circles;
