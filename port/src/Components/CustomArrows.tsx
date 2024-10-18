import React from "react";

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(-45deg)", // Adjust arrow direction
        width: "70px", // Increase arrow width
        height: "70px", // Increase arrow height
        borderTop: "3px solid white", // Arrow thickness and color
        borderLeft: "3px solid white", // Arrow thickness and color
        cursor: "pointer", // Change cursor on hover
      }}
      onClick={onClick}
    >
      {"<"} {/* Arrow content */}
    </div>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(45deg)", // Adjust arrow direction
        width: "70px", // Increase arrow width
        height: "70px", // Increase arrow height
        borderTop: "3px solid white", // Arrow thickness and color
        borderLeft: "3px solid white", // Arrow thickness and color
        cursor: "pointer", // Change cursor on hover
      }}
      onClick={onClick}
    >
      {">"} {/* Arrow content */}
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };
