import ImageAndTextSquare from "../global/ImageAndTextSquare";
import styles from '../../style/textandimage.module.css'
import diversity from '../../media/diversity.webp';
import partial from '../../media/partial.webp';
import opinion from '../../media/opinion.webp';

import { HashLink } from 'react-router-hash-link';

const TextAndImage = () => {
  return (
    <section className={styles.textAndImageContainer + " container py-3 py-lg-5"} >
    <div className="row mb-5">
        <div className="col-12 text-center">
            <h2 className="h1">Additional services</h2>
        </div>
    </div>
      <div className="row">
        <div className={styles.firstImg + " col-12 col-lg-4 mb-5 mb-lg-0"}>
            <ImageAndTextSquare 
                imgSrc={diversity} 
                altTxt="blackbird recruitment - diversity recruitment" 
                heading="Diversity recruitment"  
                paragraph="We know how important it is to have a diverse workforce and there is still a lot to do regarding diversity and inclusion in the recruitment process."
            />
            <HashLink to="/services">Read more</HashLink>
        </div>
        <div className={styles.secondImg +  " col-12 col-lg-4 mb-5 mb-lg-0"}>
            <ImageAndTextSquare 
                imgSrc={partial} 
                altTxt="blackbird recruitment - partial acquistion services" 
                heading="Partial Acquisition Services (PAS)" 
                paragraph="If you already have a strong Talent Acquisition team, you can outsource only parts of the recruitment process to us."
                paragraph2="Our ambition is to be as flexible as possible to support you in demanding situations."
            />
            <HashLink to="/services">Read more</HashLink>
        </div>
        <div className={styles.thirdImg + " col-12 col-lg-4"}>
            <ImageAndTextSquare 
                imgSrc={opinion} 
                altTxt="blackbird recruitment - second opinion services" 
                heading="Second Opinion Services" 
                paragraph="Blackbird can consult you as an objective third party in your selection processes. From our knowledge in personal and group dynamics, we can give valuable advise as support for you to select the right candidates."
            />
            <HashLink to="/services">Read more</HashLink>

        </div>
      </div>
    </section>
  );
};

export default TextAndImage;
