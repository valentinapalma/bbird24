import FirstIntro from '../components/about/FirstIntro';
import SecondIntro from '../components/about/SecondIntro';
import ApplicantsUsp from '../components/applicants/ApplicantsUsp';
import Banner from '../components/global/Banner';

function AboutUs() {
  return (
    <>
      <div className="py-3 py-md-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <Banner 
          heading={"Our story."} 
          lead={"Most positive experiences in life are linked to the people we are surrounded by."} 
          paragraph={"Blackbird was created to have an impact on people, the recruitment industry, and giving back to society. We do this by adding a human element to the recruitment process going beyond skills, experience, and references; and into understanding each individual person for their own uniqueness."}
        />
      </div>
      <FirstIntro />
      <SecondIntro />
      <ApplicantsUsp />
    </>
  );
}

export default AboutUs;
