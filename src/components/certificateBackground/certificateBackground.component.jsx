import { ReactComponent as CertificateBck } from "../../assets/waves/certificates-waves.svg";
import "./certificateBackground.styles.scss";

const CertificateBackground = () => {
  return (
    <div className="certificateBackground__wrapper">
      <CertificateBck className="certificate-bck" />
    </div>
  );
};

export default CertificateBackground;
