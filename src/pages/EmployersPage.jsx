import ContactUsBanner from '../components/employers/ContactUsBanner';
import Employers from '../components/employers/Employers';

const EmployersPage = () => {
  return (
          <>
            <Employers />
            <ContactUsBanner 
              heading="We would love to tell you more" 
              paragraph="Contact us and we will be happy to share more details about our offering." 
              label="Contact us now" />
          </>
  );
}

export default EmployersPage;


