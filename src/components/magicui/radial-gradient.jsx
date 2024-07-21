import React from "react";
import PropTypes from "prop-types";

const RadialGradient = ({
  type = "circle",
  from = "rgba(120,119,198,0.3)",
  to = "hsla(0, 0%, 0%, 0)",
  size = 300,
  origin = "center",
  className,
}) => {
  const styles = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    backgroundImage: `radial-gradient(${type} ${size}px at ${origin}, ${from}, ${to})`,
  };

  return <div className={className} style={styles} />;
};

RadialGradient.propTypes = {
  type: PropTypes.oneOf(["circle", "ellipse"]),
  from: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.number,
  origin: PropTypes.oneOf([
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top left",
    "top right",
    "bottom left",
    "bottom right",
  ]),
  className: PropTypes.string,
};

RadialGradient.defaultProps = {
  type: "circle",
  from: "rgba(120,119,198,0.3)",
  to: "hsla(0, 0%, 0%, 0)",
  size: 300,
  origin: "center",
  className: "",
};

export default RadialGradient;
