import ImageAndTextSquare from "../global/ImageAndTextSquare";
import styles from '../../style/threeimages.module.css'
import diversity from '../../media/diversity.webp';
import partial from '../../media/partial.webp';
import opinion from '../../media/opinion.webp';
import { useState } from "react";

const ThreeImages = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMorePAS, setShowMorePAS] = useState(false);
    const [showMoreSOS, setShowMoreSOS] = useState(false);

  return (
    <section class="container py-3 py-lg-5 mb-lg-5" id="threeimages" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <div className="row">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <ImageAndTextSquare 
                imgSrc={diversity} 
                altTxt="blackbird recruitment - add more" 
                heading="Diversity Recruitment"  
                paragraph="We know how important it is to have a diverse workforce and there is still a lot to do regarding diversity and inclusion in the recruitment process."
            />
            {!showMore && <a className={styles.arrow} onClick={() => setShowMore(true)}>Continue</a>}
            {showMore ? 
            <>
            <p>Companies with high levels of gender, racial and ethnic diversity are more likely to report above-average financial returns; 25% more for gender diversity and 36% more for racial and ethnic diversity according to McKinsey. On top of that, a working environment filled with employees of different backgrounds, skills, experiences, and knowledge will increase innovative and creative ideas.</p>    
            <p>Our alternative recruitment process focuses on diversity and limits bias when evaluating candidates. Instead of letting your decision get impacted by conscious and unconscious biases, diversity recruitment is about making sure that you evaluate candidates based on what matters – their talents, skills, and motivation.</p>
            <p>Through this process we hope to contribute to a fairer marketplace for our candidates, and to help our clients to act today for the future.
                Hiring diverse talent is an important step but it is not enough—it’s the inclusion in the workplace and the company culture that shapes whether people remain and thrive.
            </p>
            <p>
                Contact us to hear more about this responsible way of recruiting
                We are also constantly looking for partners/experts to help us develop this initiative further so please reach out if you want to help us make an impact.
            </p>
            </>
            : null
        }
            {showMore && <a className={`${styles.arrow} ${styles.arrowUp}`} onClick={() => setShowMore(false)}>Less</a>}

        </div>
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <ImageAndTextSquare 
                imgSrc={partial} 
                altTxt="blackbird recruitment - add more" 
                heading="Partial Acquistition SERVICES (PAS)" 
                paragraph="If you already have a strong Talent Acquisition team, you can outsource only parts of the recruitment process to us."
                paragraph2="Our ambition is to be as flexible as possible to support you in demanding situations."
            />
            {!showMorePAS && <a className={styles.arrow} onClick={() => setShowMorePAS(true)}>Continue</a>}
            {
                showMorePAS ? 
                <>
                    <p>We adapt to create as much value to our customers as possible. To meet your specific needs, we offer to provide only parts of the full recruitment service. With our expertise we believe these services can open up valuable time for you in demanding situations.</p>
                    <p>We look forward to create solutions together with you.</p>
                </>
                : null
            } 
            {showMorePAS && <a className={`${styles.arrow} ${styles.arrowUp}`}  onClick={() => setShowMorePAS(false)}>Less</a>}
        </div>
        <div className="col-12 col-lg-4">
            <ImageAndTextSquare 
                imgSrc={opinion} 
                altTxt="blackbird recruitment - add more" 
                heading="Second Opinion Services" 
                paragraph="Blackbird can consult you as an objective third party in your selection processes. From our knowledge in personal and group dynamics, we can give valuable advise as support for you to select the right candidates."
            />
            {!showMoreSOS && <a className={styles.arrow} onClick={() => setShowMoreSOS(true)}>Continue</a>}
            {
                showMoreSOS ? 
                <>
                    <p>We understand how difficult it can be to decide between a number of very qualified candidates. With our second opinion services, our aim is to support you at the final stage of your recruitment process. As your objective partner, we assess your final candidates by use of tools and methods to help you make the right decision.</p>
                    <p>By using this approach, you will be supported by valuable input and comprehensive data, which is provided objectively by us as an external party outside of your organization and your recruitment process.</p>
                    <p>With this collaboration we would love to provide crucial advise to your final candidate selection, and also introduce opportunities to the integration procedure of your new employee.</p>
                    <p>We only work with quality assured and validated solutions to understand peoples preferred ways to work and what drives them. The applicants are given a fair evaluation, and are provided with comprehensive feedback. You are provided with a solid input to make a well-educated decision.</p>
                </>
                : null
            }
            {showMoreSOS && <a className={`${styles.arrow} ${styles.arrowUp}`}onClick={() => setShowMoreSOS(false)}>Less</a>}
        </div>
      </div>
    </section>
  );
};

export default ThreeImages;
