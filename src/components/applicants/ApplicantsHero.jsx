import SquareImage from '../global/SquareImage';
import Text from '../global/Text';
import img from '../../media/blackbird-recruitment-applicants.webp';

const ApplicantsHero = () => {
    return (
      <div className="container py-3 py-lg-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <SquareImage imgSrc={img} altTxt={"Blackbird Recruitment - applications"} />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
            <Text 
                heading={"Applications"} 
                lead={"We understand that finding a new job that suits you can be difficult. Blackbird helps to guide you in the right direction."}
                paragraph={"We specialize in corporate functions: Finance & Accounting, HR, Supply Chain and Sales, where we add value from our own backgrounds and experiences to be able to explicitly understand what you are looking for. We work with companies in different industries in Switzerland and across Europe."}
                paragraph2={"Our aim is to make the recruitment process as efficient as possible for you, and to be with you throughout the full process to reach your goals. Take your career to new heights with us."}
            />
            <p>Have a look at our open positions below.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ApplicantsHero;
  