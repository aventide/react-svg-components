import React from "react";

const Donut = ({
  size,
  color,
  fillColor,
  strokeWidth,
  circled,
  text,
  progress
}) => {
  const diameter = String(size * 2);
  const radius = String(size);
  const effectiveRadius = radius - strokeWidth;

  const { slices, step, color: progressColor, strokeWidth: progressStrokeWidth } = Object(progress);

  const circumference = 2 * Math.PI * effectiveRadius;
  const progressFraction = 1 / slices;

  const styles = {
    fontFamily: "poppins"
  };

  return (
    <svg height={diameter} width={diameter} style={styles}>
      <circle
        cx={radius}
        cy={radius}
        r={String(effectiveRadius)}
        stroke={circled ? color : "none"}
        strokeWidth={String(strokeWidth)}
        fill={fillColor ? fillColor : "none"}
      />
      {progress &&
        progress.step > 0 && (
          <circle
            cx={radius}
            cy={radius}
            r={String(effectiveRadius)}
            stroke={progressColor ? progressColor : "white"}
            strokeWidth={
              progressStrokeWidth ? String(progressStrokeWidth) : "3"
            }
            fill="none"
            strokeDasharray={
              circumference * progressFraction * step + " " + circumference
            }
          />
        )}
      <text
        x={size}
        y={size}
        fill={color}
        fontSize={size}
        fontWeight={circled ? "900" : "100"}
        textAnchor="middle"
        alignmentBaseline="central"
      >
        {text}
      </text>
    </svg>
  );
};

export default Donut;
