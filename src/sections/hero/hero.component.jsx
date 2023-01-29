import HeroButton from "../../components/heroButton/heroButton.component";
import AnimationMockup from "../../components/animationMockup/animationMockup.component";
import WaveBackground from "../../components/backgrounds/waveBackground.component";
import "../../components/scss/base/_typography.scss";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="section-hero">
      <WaveBackground className="hero__background" />
      <div className="hero">
        <div className="hero__txt">
          <h1 className="heading-primary">
            Unlock your potential with
            <span className="heading-primary__mavens"> Mavens</span>
          </h1>

          <p className="hero__description">
            Achieve your professional goals with Mavens <br />
            The ultimate e-learning platform for career advancement.
          </p>
          <HeroButton />
        </div>
        <AnimationMockup className="hero__mockup" />
      </div>
    </section>
  );
};

export default Hero;
