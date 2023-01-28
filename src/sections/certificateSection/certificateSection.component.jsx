import { ReactComponent as React } from "../../assets/logos/react-logo.svg";
import { ReactComponent as NodeJS } from "../../assets/logos/nodejs-logo.svg";
import { ReactComponent as GraphQL } from "../../assets/logos/graphql-logo.svg";
import { ReactComponent as Figma } from "../../assets/logos/figma-logo.svg";
import CertificateBackground from "../../components/certificateBackground/certificateBackground.component";
import "../../components/scss/base/_typography.scss";
import "./certificateSection.styles.scss";

const CertificateSection = () => {
  return (
    <section className="certificate-section">
      <CertificateBackground className="certificate-background" />
      <div className="certificate">
        <div className="certificateCard__wrapper">
          <div className="card__wrapper card__wrapper--card4">
            <div className="card__wrapper--top">
              <div className="card__wrapper--text">
                <h2 className="card__wrapper--heading">Learn SASS</h2>
                <p>CERTIFICATE</p>
              </div>
              <Figma className="card__wrapper--logo" />
            </div>
            <div className="card__wrapper--down">
              <p></p>
              <p>MAVENS</p>
            </div>
          </div>
          <div className="card__wrapper card__wrapper--card3">
            <div className="card__wrapper--top">
              <div className="card__wrapper--text">
                <h2 className="card__wrapper--heading">Learn GraphQL</h2>
                <p>CERTIFICATE</p>
              </div>
              <GraphQL className="card__wrapper--logo" />
            </div>
            <div className="card__wrapper--down">
              <p></p>
              <p>MAVENS</p>
            </div>
          </div>
          <div className="card__wrapper card__wrapper--card2">
            <div className="card__wrapper--top">
              <div className="card__wrapper--text">
                <h2 className="card__wrapper--heading">Learn NodeJS</h2>
                <p>CERTIFICATE</p>
              </div>
              <NodeJS className="card__wrapper--logo" />
            </div>
            <div className="card__wrapper--down">
              <p></p>
              <p>MAVENS</p>
            </div>
          </div>
          <div className="card__wrapper card__wrapper--card1">
            <div className="card__wrapper--top">
              <div className="card__wrapper--text">
                <h2 className="card__wrapper--heading">Learn React</h2>
                <p>CERTIFICATE</p>
              </div>
              <React className="card__wrapper--logo" />
            </div>
            <div className="card__wrapper--down">
              <p></p>
              <p>MAVENS</p>
            </div>
          </div>
        </div>
        <div className="certificate__textWrapper">
          <h3 className="heading-tertirary certificate__textWrapper--title">
            Build you Carrier
          </h3>
          <h1 className="heading-secondary certificate__textWrapper--heading">
            Gain Certificates
          </h1>
          <p className="certificate__textWrapper--description">
            Earn a certificate and showcase your projects on Mavens after
            successfully completing a course.
          </p>

          <button className="certificate__textWrapper--createAccount">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
