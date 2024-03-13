import SquareImage from '../global/SquareImage';
import Text from '../global/Text';
import ev from '../../media/blackbird-recruitment-evelyn-palma.webp';

const FirstIntro = () => {
    return (
      <div className="container py-3 py-md-5">
        <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <SquareImage imgSrc={ev} altTxt={"Evelyn Palma - one of the founders of Blackbird Recruitment"} />
                <figcaption className="small mt-1 fw-bold">Evelyn Palma, co-founder of Blackbird Recruitment®</figcaption>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                <Text 
                    heading={"Experience"}
                    lead={"After working in corporate functions for several years we realized that besides the knowledge and the professional growth we acquired, what we really kept with us was all the personal connections we made in the companies we worked for."}
                    paragraph={"The memories we shared with colleagues and the lifelong friends we made. Having had the possibility to hire, lead, motivate, and develop corporate teams, it was clear to us that we really wanted to work with people and to help organizations build stronger, diverse, and motivated teams."}
                />
            </div>
        </div>
      </div>
    );
  }
  
export default FirstIntro;