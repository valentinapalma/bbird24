import SquareImage from '../global/SquareImage';
import Text from '../global/Text';
import p from '../../media/blackbird-recruitment-peter-sand.webp';

const SecondIntro = () => {
    return (
      <div className="container py-5 mb-md-5">
        <div className="row align-items-center">
            <div className="col-12 col-lg-5 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <Text 
                    heading={"Communication"}
                    lead={"More than the Blackbird being the national bird of our home country Sweden, and the fact that we love nature; birds stand for communication and freedom."}
                    paragraph={"For us communication is key in every relationship we have, and we firmly believe that when you work in the right environment, with the right people, and doing something that you really enjoy, you will have a sense of freedom."}
                    paragraph2={"We know it becuse we feel it every day."}
                />
            </div>
            <div className="col-12 col-lg-6 offset-lg-1 order-1 order-lg-2 mb-4 mb-lg-0" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <SquareImage imgSrc={p} altTxt={"Peter Sand - one of the founders of Blackbird Recruitment"} />
                <figcaption className="small mt-1 fw-bold">Peter Sand, co-founder of Blackbird Recruitment®</figcaption>
            </div>
        </div>
      </div>
    );
  }
  
export default SecondIntro;