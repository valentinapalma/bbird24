import styles from '../../style/global/circles.module.css';

const Banner = ({ image, imgSrc, altTxt }) => {
    return (
            <div class="position-relative h-100">
                <span className={styles.smallCircle}></span>
                <span className={styles.bigCircle}></span>
            </div>
    )
}

export default Banner;