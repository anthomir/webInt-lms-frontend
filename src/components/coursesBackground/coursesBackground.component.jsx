import { ReactComponent as WaveOne } from "../../assets/waves/courses-wave1.svg";
import { ReactComponent as WaveTwo } from "../../assets/waves/courses-wave2.svg";
import { ReactComponent as CircleOne } from "../../assets/waves/courses-circle-1.svg";
import { ReactComponent as CircleTwo } from "../../assets/waves/courses-circle-2.svg";
import { ReactComponent as WaveLines } from "../../assets/waves/courses-lines.svg";

import "./coursesBackground.styles.scss";

const CoursesBackground = () => {
  return (
    <div className="couresesWave__wrapper">
      <CircleOne className="coursesCircle coursesCircle--1" />
      <CircleTwo className="coursesCircle coursesCircle--2" />
      <WaveLines className="coursesLines" />
      <WaveOne className="coursesWave coursesWave--1" />
      <WaveTwo className="coursesWave coursesWave--2" />
    </div>
  );
};

export default CoursesBackground;
