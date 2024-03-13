import styles from '../../style/global/imageandtextsquare.module.css';

const ImageAndTextSquare = ({ imgSrc, altTxt, heading, paragraph, paragraph2 }) => {
  return (
    <div className={styles.imgTextContainer}>
      <img src={imgSrc} alt={altTxt} />
      <div className={styles.headingBox}>
        <p className="mb-0">{heading}</p>
      </div>
      <p>{paragraph}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default ImageAndTextSquare;
