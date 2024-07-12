import React, { FunctionComponent, ReactNode } from 'react';

type Props = {
  size?: number;
  value?: number;
  color?: string;
  pathColor?: string;
  text?: ReactNode;
  className?: string;
  textClassName?: string;
};

const ProgressCircle: FunctionComponent<Props> = ({
  size = 200,
  value = 50,
  color = '#005FCC',
  pathColor = '#ECF3F9',
  text,
  className,
  textClassName,
}: Props) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const fontSize = size / 10;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          strokeWidth="8"
          stroke={pathColor}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          strokeWidth="8"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div
        className={`absolute flex flex-col items-center justify-center font-semibold whitespace-pre-line text-center ${textClassName}`}
        style={{ fontSize: fontSize }}
      >
        {text}
      </div>
    </div>
  );
};

export default ProgressCircle;
