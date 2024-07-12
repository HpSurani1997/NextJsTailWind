import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  backgroundColor,
  className,
  ...props
}) => {
  const combineClass = `h-[60px]  rounded-full font-semibold ${color || 'text-white'} border-0 w-52 ${backgroundColor || 'bg-blue_850'}`;
  const buttonClass = clsx(className, combineClass);

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
