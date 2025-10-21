import { useState } from "react";
import { FaSearch } from "react-icons/fa"; //npm install react-icons
import "../style.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleclick = (e) => {
    setBgColor("#1b1b1b");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="container"
      style={{ background: bgColor }}
      onClick={handleclick}
    >
      {showInput ? (
        <input type="text" placeholder="search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
