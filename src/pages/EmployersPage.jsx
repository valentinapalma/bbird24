import ContactUsBanner from '../components/employers/ContactUsBanner';
import Employers from '../components/employers/Employers';
import TextAndCircles from '../components/employers/TextAndCircles';

const EmployersPage = () => {
  return (
          <>
            <Employers />
            <TextAndCircles 
              heading="We offer solutions through personnel analysis as a cornerstone in our hiring and selection process."
              lead="To achieve all of this we offer solutions through personnel analysis as a cornerstone in our hiring and selection process."
              paragraph="This approach helps us to evaluate and understand our candidates far beyond our own interviews and the technical requirements for the role. In addition, it supports the integration of the new employees for a long-term win-win. We believe this sets a higher quality standard to the recruitment service."             
              paragraph2="The way we work is inspired by our enthusiasm of keeping long lasting relationships with people."
            />
            <ContactUsBanner 
              heading="We would love to tell you more" 
              paragraph="Contact us and we will be happy to share more details about our offering." 
              label="Contact us now" />
          </>
  );
}

export default EmployersPage;


