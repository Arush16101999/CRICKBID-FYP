import React from "react";

interface RoundedProgressBarProps {
  percentage: number;
  size: number;
}

const RoundedProgressBar: React.FC<RoundedProgressBarProps> = ({
  percentage,size
}) => {
  const strokeWidth = 7;
  const radius = (size/2) - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <div className="rounded-progress-bar" style={{ position: "relative" }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#404040"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#69f542"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size/2})`}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={size/3}
          fill="#e6c300"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default RoundedProgressBar;
