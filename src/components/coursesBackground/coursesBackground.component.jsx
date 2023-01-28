import { ReactComponent as WaveZero } from "../../assets/waves/course-wave0.svg";
import { ReactComponent as WaveTwo } from "../../assets/waves/courses-wave2.svg";

import { ReactComponent as WaveLines } from "../../assets/waves/courses-lines.svg";

import "./coursesBackground.styles.scss";

const CoursesBackground = () => {
  return (
    <div className="couresesWave__wrapper">
      <WaveLines className="coursesLines" />
    </div>
  );
};

export default CoursesBackground;
