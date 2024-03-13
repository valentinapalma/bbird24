import SquareImage from '../global/SquareImage';
import Text from '../global/Text';

import switzerland from '../../media/sch.webp';
const Diversity = () => {
  return (
    <section class="container py-5">
      <div class="row align-items-center">
        <div class="col-12 col-lg-5">
          <Text
            heading="We specialize in the recruitment of corporate functions, Finance, HR, Supply Chain, and Sales in Switzerland and abroad."
            paragraph="Our consultants are based in Zurich and have a background in their field of recruitment, which allows them to highly benefit from their experience outside of recruitment to understand technical requirements as well."
          />
        </div>
        <div class="col-12 col-lg-6 offset-lg-1 mb-3 mb-lg-0">
          <SquareImage imgSrc={switzerland} altTxt="blackbird recruitment - switzerland alps nature flowers tree" />
        </div>
      </div>
    </section>
  );
};

export default Diversity;