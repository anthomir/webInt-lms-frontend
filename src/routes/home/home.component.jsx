import CertificateSection from "../../sections/certificateSection/certificateSection.component";
import CourseSection from "../../sections/courseSection/courseSection.component";
import Hero from "../../sections/hero/hero.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <CourseSection />
      <CertificateSection />
    </>
  );
};

export default Home;
