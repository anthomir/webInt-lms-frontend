import { HERO_COMPOSITION_IMAGES } from "../../assets/assets";
import "./animationMockup.styles.scss";

const AnimationMockup = () => {
  return (
    <div className="composition">
      {HERO_COMPOSITION_IMAGES.map(({ id, title, imageUrl }) => (
        <frame
          className={`composition__frame composition__frame--${id}`}
          key={id}
          alt={title}
        ></frame>
      ))}
    </div>
  );
};

export default AnimationMockup;
