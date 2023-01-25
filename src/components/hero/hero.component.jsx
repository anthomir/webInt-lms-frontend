import HeroButton from "../heroButton/heroButton.component";
import AnimationMockup from "../animationMockup/animationMockup.component";
import WaveBackground from "../backgrounds/waveBackground.component";
import "../scss/base/_typography.scss";
import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="section-hero">
      <WaveBackground />
      <div className="hero">
        <div className="hero__txt">
          <h1 className="heading-primary">Unlock your potential with Mavens</h1>

          <p className="hero__description">
            Achieve your professional goals with Mavens <br />
            The ultimate e-learning platform for career advancement.
          </p>
          <HeroButton />
        </div>
        <AnimationMockup />
      </div>
    </section>
  );
};

export default Hero;
