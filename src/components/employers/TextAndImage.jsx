import ImageAndTextSquare from "../global/ImageAndTextSquare";
import styles from '../../style/textandimage.module.css'
import diversity from '../../media/diversity.webp';
import partial from '../../media/partial.webp';
import opinion from '../../media/opinion.webp';

// TODO: fixa read more länkarna till respektive sektion/sida
const TextAndImage = () => {
  return (
    <section className="container py-5">
    <div className="row mb-5">
        <div className="col-12 text-center">
            <h2 className="h1">We are here for...</h2>
        </div>
    </div>
      <div className="row">
        <div className={styles.firstImg + " col-12 col-lg-4 mb-5 mb-lg-0"} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <ImageAndTextSquare 
                imgSrc={diversity} 
                altTxt="blackbird recruitment - diversity recruitment" 
                heading="Diversity Recruitment"  
                paragraph="We know how important it is to have a diverse workforce and there is still a lot to do regarding diversity and inclusion in the recruitment process."
            />
            <a href="/">Read more</a>
        </div>
        <div className={styles.secondImg +  " col-12 col-lg-4 mb-5 mb-lg-0"} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <ImageAndTextSquare 
                imgSrc={partial} 
                altTxt="blackbird recruitment - partial acquistion services" 
                heading="Partial Acquisition Services (PAS)" 
                paragraph="If you already have a strong Talent Acquisition team, you can outsource only parts of the recruitment process to us."
                paragraph2="Our ambition is to be as flexible as possible to support you in demanding situations."
            />
            <a href="/">Read more</a>
        </div>
        <div className={styles.thirdImg + " col-12 col-lg-4"} data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
            <ImageAndTextSquare 
                imgSrc={opinion} 
                altTxt="blackbird recruitment - second opinion services" 
                heading="Second Opinion Services" 
                paragraph="Blackbird can consult you as an objective third party in your selection processes. From our knowledge in personal and group dynamics, we can give valuable advise as support for you to select the right candidates."
            />
            <a href="/">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default TextAndImage;
