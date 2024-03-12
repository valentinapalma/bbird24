import Text from '../global/Text';
import CircleImage from '../global/Circles';
import hrimg from '../../media/blackbird-recruitment-human-resources.webp';

const Section2 = () => {
    return (
        <section className="container py-5">
            <div className="row mb-5">
                <div className="col-12 text-center">
                    <h2 className="h1">We are here for...</h2>
                </div>
            </div>
            <div class="row h-100 align-items-center">
                <div class="col-12 col-lg-6">
                    <Text 
                        heading={"HR"} 
                        lead={"As your external talent partner, we will support you and your recruitment team with everything you need to attract, hire, onboard and retain talent."}
                        paragraph={"We know that the critical nature of the HR position implies running several projects simultaneously and that you need to prioritize your recruitment efforts. Based on our professional experience, in addition to our recruitment expertise, we do not only speak your language, but also the one of your corporate line managers."}
                    />
                </div>
                <div class="col-12 col-lg-6 h-100 position-relative">
                    <CircleImage imgSrc={hrimg} altTxt={"Blackbird Recruitment - we are here for human resources."}/>
                </div>
            </div>
        </section>
    )
}

export default Section2;