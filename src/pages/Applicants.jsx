import ApplicantsHero from '../components/applicants/ApplicantsHero';
import ApplicantsIFrame from '../components/applicants/ApplicantsIFrame';
import ApplicantsUsp from '../components/applicants/ApplicantsUsp';
import Banner from '../components/global/Banner';

function Applicants() {
  return (
    <>
      <ApplicantsHero />
      <ApplicantsIFrame />
      <div className="pb-5 mb-5">
        <Banner 
          heading={"Career consulting"} 
          lead={"We offer career consulting services to give you a better understanding of yourself, knowledge of what drives you, as well as what type of environment that could suit you the most."}
          paragraph={"Contact us to know more about our career consulting solutions."}
        />
      </div>
      <ApplicantsUsp />;
    </>
  );
}

export default Applicants;
