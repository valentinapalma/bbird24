import styles from '../../style/global/squareimage.module.css';

export default function SquareImage({ imgSrc, altTxt }) {
  return <img src={imgSrc} alt={altTxt} className={styles.squareImg + ' w-100 h-100'} />;
}
