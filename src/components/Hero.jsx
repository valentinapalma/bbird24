import bird from '../media/bird.gif';
import Text from '../components/Text';
import Circles from '../components/Circles';

const Hero = () => {
    return (
        <div className="container" style={{paddingTop: "80px", height: "500px"}}>
        <div className="row">
            <div className="col">
                <Text heading="Blackbird Recruitment" lead="The human at the core of everything we do" />
                <Circles image imgSrc={bird} />
            </div>
        </div>
      </div>
    )
}

export default Hero;