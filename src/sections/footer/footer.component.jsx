import { ReactComponent as Mavens } from "../../assets/icons/header-logo.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="container grid grid--5-cols">
        <div class="footer__logo-col">
          <p href="#" class="footer__logo">
            <Mavens alt="brand-logo-large" class="footer__logo--img" />
          </p>

          <ul class="footer__social-links">
            <li>
              <p href="#" class="footer__nav--link">
                <ion-icon
                  name="logo-instagram"
                  class="footer__social-icon"
                ></ion-icon>
              </p>
            </li>

            <li>
              <p href="#" class="footer__nav--link">
                <ion-icon
                  name="logo-twitter"
                  class="footer__social-icon"
                ></ion-icon>
              </p>
            </li>

            <li>
              <p href="#" class="footer__nav--link">
                <ion-icon
                  name="logo-facebook"
                  class="footer__social-icon"
                ></ion-icon>
              </p>
            </li>
          </ul>

          <p class="footer__copyright">
            Copyright &copy; 2035 by Mavens. All rights reserved.
          </p>
        </div>

        <div class="footer__address-col">
          <p class="footer__heading">Contact Us</p>
          <address class="footer__contact">
            <p class="footer__address">123 Wall St., New York 534012</p>
            <p>
              <p href="tel:255-341-9567" class="footer__nav--link">
                255-341-9567
              </p>
              <br />
              <p href="mailto:support@2fit.com" class="footer__nav--link">
                support@mavens.com
              </p>
            </p>
          </address>
        </div>

        <nav class="footer__nav-col">
          <p class="footer__heading">Your Account</p>
          <ul class="footer__nav">
            <li>
              <p href="#" class="footer__nav--link">
                New account
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Sign in
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                iOS App
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Android App
              </p>
            </li>
          </ul>
        </nav>

        <nav class="footer__nav-col">
          <p class="footer__heading">Company</p>
          <ul class="footer__nav">
            <li>
              <p href="#" class="footer__nav--link">
                About 2Fit
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                For Business
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Branding
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Careers
              </p>
            </li>
          </ul>
        </nav>

        <nav class="footer__nav-col">
          <p class="footer__heading">FAQ</p>
          <ul class="footer__nav">
            <li>
              <p href="#" class="footer__nav--link">
                Terms
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Help Center
              </p>
            </li>
            <li>
              <p href="#" class="footer__nav--link">
                Privacy
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
