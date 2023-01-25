import { useState } from "react";
import "./menuToolTip.styles.scss";

const MenuToolTip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu" onClick={() => setIsOpen(true)}>
      {isOpen ? "Open" : "Closed"}
    </div>
  );
};

export default MenuToolTip;
