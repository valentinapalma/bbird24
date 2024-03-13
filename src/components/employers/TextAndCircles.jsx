import Circles from '../global/Circles';
import Text from '../global/Text';

const TextAndCircles = ({ heading, lead, paragraph, paragraph2 }) => {
    return (
      <div className=" container py-5 mb-lg-5">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-6 h-100 position-relative order-lg-2 mb-4 mb-lg-0">
            <Circles />
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-start order-lg-1">
            <Text heading={heading} lead={lead} paragraph={paragraph} paragraph2={paragraph2}/> 
          </div>
        </div>
      </div>
    )
}

export default TextAndCircles;
