import Diversity from "../components/services/Diversity";
import ThreeImages from "../components/services/ThreeImages";

const Services = () => {
  return (
    <>
      <Diversity />
      <div class="container pt-3 pt-lg-5">
        <div class="row">
          <div className="col-12 text-center">
            <h2 className="h3">In addition to our full recruitment process, we offer the following services:</h2>
          </div>
        </div>
      </div>
      <ThreeImages />
    </>
  );
}

export default Services;
