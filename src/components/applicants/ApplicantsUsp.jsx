import ImageAndTextSquare from '../global/ImageAndTextSquare';
import img1 from '../../media/blackbird-recruitment-be-brave.webp';
import img2 from '../../media/blackbird-recruitment-be-inclusive.webp';
import img3 from '../../media/blackbird-recruitment-be-respectful.webp';
import img4 from '../../media/blackbird-recruitment-be-dedicated.webp';
import styles from '../../style/pages.module.css';

const ApplicantsUsp = () => {
    return (
      <div className="container pb-5 mb-5">
        <div className="row">
            <div className="col text-center">
                <h2 className="h1 mb-4">Be blackbird</h2>
            </div>
        </div>
        <div className="row">
            <div className={styles.applicantsUsp + " col-12 col-md-6 col-lg-3"}>
                <ImageAndTextSquare imgSrc={img2} heading={"Brave"}/>
            </div>
            <div className={styles.applicantsUsp + " col-12 col-md-6 col-lg-3"}>
                <ImageAndTextSquare imgSrc={img4} heading={"Inclusive"}/>
            </div>
            <div className={styles.applicantsUsp + " col-12 col-md-6 col-lg-3"}>
                <ImageAndTextSquare imgSrc={img3} heading={"Respectful"}/>
            </div>
            <div className={styles.applicantsUsp + " col-12 col-md-6 col-lg-3"}>
                <ImageAndTextSquare imgSrc={img1} heading={"Dedicated"}/>
            </div>
        </div>
      </div>
    );
  }
  
export default ApplicantsUsp;