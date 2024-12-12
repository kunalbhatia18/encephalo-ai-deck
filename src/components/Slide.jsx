// src/components/Slide.jsx

import PropTypes from "prop-types";

const Slide = ({
  children,
  bgColor = "bg-white",
  textColor = "text-black",
  type = "default",
}) => {
  return (
    <div
      className={`snap-start min-h-screen flex flex-col items-center justify-center ${bgColor} ${textColor} relative overflow-hidden`}
    >
      {/* Decorative Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          type !== "intro"
            ? "bg-gradient-to-tl from-purple-900 to-indigo-800 opacity-50"
            : ""
        }`}
      ></div>

      {/* Slide Content */}
      <div className="z-10 px-8 max-w-5xl">{children}</div>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
};

export default Slide;
