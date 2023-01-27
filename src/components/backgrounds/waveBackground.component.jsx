import { ReactComponent as WaveOne } from "../../assets/waves/hero-wave-1.svg";
import { ReactComponent as WaveTwo } from "../../assets/waves/hero-wave-2.svg";
import { ReactComponent as WaveThree } from "../../assets/waves/hero-wave-3.svg";
import "./waveBackground.styles.scss";

const WaveBackground = () => {
  return (
    <div className="wave__wrapper">
      <div className="hero__background" />
      <WaveOne className="wave wave--1" />
      <WaveTwo className="wave wave--2" />
      <WaveThree className="wave wave--3" />
    </div>
  );
};

export default WaveBackground;
