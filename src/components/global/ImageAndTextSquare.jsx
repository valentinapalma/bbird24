import styles from '../../style/global/imageandtextsquare.module.css';

const ImageAndTextSquare = ({ imgSrc, altTxt, heading, paragraph, paragraph2 }) => {
  return (
    <div className={styles.imgTextContainer}>
      <img src={imgSrc} alt={altTxt} />
      <div className={styles.headingBox}>
        <p className="mb-0">{heading}</p>
      </div>
      {paragraph ? <p>{paragraph}</p> : null}
      {paragraph2 ? <p>{paragraph2}</p> : null}
    </div>
  );
};

export default ImageAndTextSquare;
