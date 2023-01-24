import { Link } from "react-router-dom";
import { ReactComponent as CreditIcon } from "../../assets/icons/credit.svg";
import { ReactComponent as Ring } from "../../assets/icons/icon-ring.svg";
import "./heroButton.stytles.scss";

const HeroButton = () => {
  return (
    <Link to="/page2">
      <div className="wrapper">
        <div className="wrapper__icon">
          <CreditIcon className="wrapper__creditIcon" />
          <Ring className="wrapper__ring" />
        </div>
        <div className="wrapper__textWrapper">
          <p className="wrapper__title">Start learning now</p>
          <p className="wrapper__subtitle">♾️ lectures</p>
        </div>
      </div>
    </Link>
  );
};

export default HeroButton;
