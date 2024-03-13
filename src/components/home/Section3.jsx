import Text from '../global/Text';
import CircleImage from '../global/Circles';
import lineimg from '../../media/blackbird-recruitment-line-manager.webp';

const Section3 = () => {
    return (
        <section className="container py-3">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-lg-6 h-100 position-relative mb-3 mb-lg-0">
                    <CircleImage imgSrc={lineimg} altTxt={"Blackbird Recruitment - we are here for line management."}/>
                </div> 
                <div class="col-12 col-lg-5 offset-lg-1">
                    <Text 
                        heading={"Line Manager"} 
                        lead={"As your partner we speak your language. We have previous work experience in the fields we recruit and can translate the technical/human skills you need to find the right people for your team efficiently and qualitatively."}
                        paragraph={"We know that you have constant deadlines to meet and operations to run. We can free up valuable time by advising you on your talent strategy, sharing market insights, and taking care of everything you need to hire the right people for your team. If you have an HR team, we will be happy to liaise with them to support you."}
                    />
                </div>
            </div>
        </section>
    )
}

export default Section3;