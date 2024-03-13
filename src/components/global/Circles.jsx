import styles from '../../style/global/circles.module.css';

//todo: lägg till mer props att ändra backgroundColor
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
