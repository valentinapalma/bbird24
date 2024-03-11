import Hero from '../components/Hero';

const Home = () => {
    return (
      <div className="container" style={{paddingTop: "80px", height: "500px"}}>
        <div className="row">
            <div className="col">
                <Hero />
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
