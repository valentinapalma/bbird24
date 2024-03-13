import SquareImage from '../global/SquareImage';
import Text from '../global/Text';

import img1 from '../../media/blackbird-recruitment-girl-bubblegum.jpg';

const Section1 = () => {
  return (
    <section className="container py-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <SquareImage imgSrc={img1} altTxt={"Blackbird recruitment - Happy girl with bubblegum"} />
        </div>
        <div className="col-12 col-lg-5 offset-lg-1">
          <Text
            heading={'We are driven by our passion for people.'}
            lead={
              'We believe in the impact we have when the right people work together. Building motivated and highly performing teams is the priority of leaders globally.'
            }
            paragraph={
              'Attracting your dream hire can be both time consuming and expensive. Making the wrong hire even more so (1.3 times the annual salary and more).'
            }
            paragraph2={"Don't worry, we've got you!"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;