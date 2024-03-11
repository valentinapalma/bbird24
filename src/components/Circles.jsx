import styles from '../style/circles.module.css';

//todo: lägg till mer props att ändra backgroundColor
const Circles = ({ image, imgSrc, altTxt }) => {
    return (
            <div class="position-relative h-100">
                <span className={styles.smallCircle}></span>
                <span className={styles.bigCircle}>
                    {image ?  <img src={imgSrc} alt={altTxt} style={styles.squareImg} /> : null}
                </span>
            </div>
    )
}

export default Circles;