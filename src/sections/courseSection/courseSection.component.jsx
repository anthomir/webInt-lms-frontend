import { ReactComponent as React } from "../../assets/logos/react-logo.svg";
import { ReactComponent as Figma } from "../../assets/logos/figma-logo.svg";
import { ReactComponent as Webflow } from "../../assets/logos/webflow-logo.svg";
import { ReactComponent as Sketch } from "../../assets/logos/sketch-logo.svg";
import { ReactComponent as NodeJS } from "../../assets/logos/nodejs-logo.svg";
import { ReactComponent as GraphQL } from "../../assets/logos/graphql-logo.svg";
import { ReactComponent as Sass } from "../../assets/logos/sass-logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import CoursesBackground from "../../components/coursesBackground/coursesBackground.component";
import CourseDuration from "../../components/courseDuration/courseDuration.component";
import "../../components/scss/base/_typography.scss";
import "./courseSection.styles.scss";

const CourseSection = () => {
  return (
    <section className="section-courses">
      <CoursesBackground className="courses-background" />
      <div className="courses">
        <div className="courses__txt">
          <h2 className="heading-secondary courses__heading">
            Latest tools and platforms <br /> with Mavens.
          </h2>

          <p className="courses__description">
            Mavens provides comprehensive training on industry leading platforms
            to ensure you are job-ready.
          </p>
        </div>
        <div className="courses__list">
          <div className="courses__logoWrapper">
            <React className="courses__techLogo" />
            <Figma className="courses__techLogo" />
            <Webflow className="courses__techLogo" />
            <Sketch className="courses__techLogo" />
            <NodeJS className="courses__techLogo" />
            <GraphQL className="courses__techLogo" />
            <Sass className="courses__techLogo" />
          </div>
          <div className="courses__search">
            <label className="courses__searchLabel">
              <Search className="courses__searchLens" />
              <input
                type="text"
                name="search"
                placeholder="name"
                className="courses__input"
              />
            </label>
          </div>
        </div>
        <div className="courses__duration">
          <CourseDuration />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
