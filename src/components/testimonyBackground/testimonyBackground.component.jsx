import { ReactComponent as TestimonyWave } from "../../assets/waves/testimonial-waves.svg";
import "./testimonyBackground.styles.scss";

const TestimonyWaves = () => {
  return (
    <div className="testimonyWave__wrapper">
      <TestimonyWave className="testimony-bck" />
    </div>
  );
};

export default TestimonyWaves;
