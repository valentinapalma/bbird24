import styles from '../style/imageandtextsquare.module.css';

const ImageAndTextSquare = ({ imgSrc, altTxt, heading, paragraph }) => {
  return (
    <div className={styles.imgTextContainer}>
      <img src={imgSrc} alt={altTxt} />
      <div className={styles.headingBox}>
        <p className="mb-0">{heading}</p>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

export default ImageAndTextSquare;