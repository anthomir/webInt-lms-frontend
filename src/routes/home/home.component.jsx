import Footer from "../../sections/footer/footer.component";
import CertificateSection from "../../sections/certificateSection/certificateSection.component";
import CourseSection from "../../sections/courseSection/courseSection.component";
import TestimonySection from "../../sections/testimonySection/testimonySection.component";
import Hero from "../../sections/hero/hero.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <CourseSection />
      <CertificateSection />
      <TestimonySection />
      <Footer />
    </>
  );
};

export default Home;
