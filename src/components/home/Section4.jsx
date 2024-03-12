import Text from '../global/Text';
import CircleImage from '../global/Circles';
import talentimg from '../../media/blackbird-recruitment-diverse-talent.webp';

const Section4 = () => {
    return (
        <section className="container py-5">
            <div class="row h-100 align-items-center"> 
                <div class="col-12 col-lg-5">
                    <Text 
                        heading={"Diverse Talent"} 
                        lead={"Finding a new job is not easy, whether you are actively or passively looking, we know that you will need to spend a lot of time in your applications."}
                        paragraph={"Maybe you haven’t updated your CV in years, or you may be looking for opportunities abroad. Additionally, you might feel discouraged because of unrealistic job requirements in the market. We will always do our outmost to support you, to advice our clients to avoid biases, to represent you fairly, and to constantly look for ways to improve your candidate experience."}
                    />
                </div>
                <div class="col-12 col-lg-6 offset-lg-1 h-100 position-relative">
                    <CircleImage imgSrc={talentimg} altTxt={"Blackbird Recruitment - we are here for diverse talent."}/>
                </div>
            </div>
        </section>
    )
}

export default Section4;