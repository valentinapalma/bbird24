import Circles from '../global/Circles';
import Text from '../global/Text';

const TextAndCircles = ({ heading, lead, paragraph, paragraph2 }) => {
    return (
      <div className=" container py-5 mb-5">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <Text heading={heading} lead={lead} paragraph={paragraph} paragraph2={paragraph2}/> 
          </div>
          <div className="col-12 col-lg-6 h-100 position-relative">
            <Circles />
          </div>
        </div>
      </div>
    )
}

export default TextAndCircles;
