import employers from '../../media/employers.jpg';
import SquareImage from '../global/SquareImage';
import Text from '../global/Text';

const Employers = () => {
  return (
    <section class="container py-5">
      <div class="row align-items-center">
        <div className='col-12 col-lg-5'>
          <SquareImage imgSrc={employers} altTxt="blackbird recruitment - desktop mobile plants" />
        </div>
        <div className='col-12 col-lg-6 offset-lg-1'>
            <Text 
                heading="Our main service is focused on recruitment and talent management." 
                lead="We know that the success of any business centers around its people. Therefore, getting the hiring process right is essential." 
                paragraph="By finding and developing the right talent you will not only save costs, but it will strengthen your company culture, employee retention, and overall performance." 
                paragraph2="Our goal is to provide a personalized service where we rely heavily on quality rather than quantity.
                Our purpose is to find people who will both fit an organizations purpose, as well as the team they will work with.
                Our search for talent goes beyond skills, experience, and references, and into understanding each person for their uniqueness." />            
        </div>
      </div>
    </section>
  );
};

export default Employers;
