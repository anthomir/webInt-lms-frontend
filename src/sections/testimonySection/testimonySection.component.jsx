// import { ReactComponent as Mir } from "../../assets/avatars/Mir.jpg";
import Logos from "../../components/logos/logos.component";
import TestimonyWaves from "../../components/testimonyBackground/testimonyBackground.component";
import "./testimonySection.styles.scss";

const TestimonySection = () => {
  return (
    <section className="testimony">
      <TestimonyWaves className="testimony-background" />
      <div className="testimony__user">
        <div className="testimony__userCard testimony__userCard--1">
          <div className="user__detail">
            <div
              alt="Mir"
              className="user__detail--image user__detail--image-1"
            />
            <h3 className="user__detail--name">Mir</h3>

            <h3 className="user__detail--job">Web3 Backend Dev</h3>
            <div className="user__detail--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              libero, odio impedit minus rem, quos dignissimos cupiditate
              perspiciatis earum magni facere est. Repellendus quo voluptate
              provident molestias sit, architecto totam!
            </div>
          </div>
        </div>
        <div className="testimony__userCard testimony__userCard--2">
          <div className="user__detail">
            <div
              alt="Mir"
              className="user__detail--image user__detail--image-2"
            />
            <h3 className="user__detail--name">Harsh</h3>

            <h3 className="user__detail--job">SpringBoot Backend Dev</h3>
            <div className="user__detail--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              libero, odio impedit minus rem, quos dignissimos cupiditate
              perspiciatis earum magni facere est. Repellendus quo voluptate
              provident molestias sit, architecto totam!
            </div>
          </div>
        </div>
        <div className="testimony__userCard testimony__userCard--3">
          <h3 className="user__detail--teamHeading">Trusted by teams</h3>
          <h2 className="user__detail--count">100,000 people</h2>
          <p className="user__detail--info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad
            rerum nemo qui. Dolores similique natus delectus totam consequatur
            distinctio veritatis rem provident quas eaque qui, obcaecati omnis
            cupiditate dolorum?
          </p>
        </div>
      </div>
      <div className="testimony__companies">
        <Logos className="testimony-logos" />
      </div>
      <div className="testimony__who">
        <div className="who__container">
          <p className="who__container--title">WHO'S BEHIND</p>
          <h2 className="who__container--subtitle">Meet the instructors</h2>
          <p className="who__container--content">
            At Mavens, we strive to consistently offer a step-by-step approach,
            including source files and placing a strong emphasis on design in
            all of our courses.
          </p>
        </div>
        <div className="testimony__instructor">
          <div className="testimony__instructor--1"></div>
          <div className="testimony__instructor--2"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
