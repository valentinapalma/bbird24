import styles from '../../style/global/banner.module.css';
import Text from './Text';

const Banner = ({ heading, lead, paragraph, paragraph2 }) => {
  return (
    <div className={styles.parent + ' container'}>
      <div className="row h-100 align-content-center">
        <div className={styles.text + " col-12 col-lg-8 offset-lg-2 text-center"}>
           <Text heading={heading} lead={lead} paragraph={paragraph} paragraph2={paragraph2}/>            
        </div>
        <div className={styles.leftCircle}></div>
        <div className={styles.rightCircle}></div>
      </div>
    </div>
  );
};

export default Banner;
