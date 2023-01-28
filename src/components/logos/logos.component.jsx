import { ReactComponent as Square } from "../../assets/companies/square.svg";
import { ReactComponent as Apple } from "../../assets/companies/apple.svg";
import { ReactComponent as Fb } from "../../assets/companies/facebook.svg";
import { ReactComponent as Airbnb } from "../../assets/companies/airbnb.svg";
import { ReactComponent as Google } from "../../assets/companies/google.svg";
import { ReactComponent as Amazon } from "../../assets/companies/amazon.svg";
import "./logos.styles.scss";

const Logos = () => {
  return (
    <div className="logo-container">
      <Square />
      <Apple />
      <Fb />
      <Airbnb />
      <Google />
      <Amazon />
    </div>
  );
};

export default Logos;
