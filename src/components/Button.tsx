import React, { ButtonHTMLAttributes } from "react";

type Props = {
    text: string;
    className?: string;
};

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (
  {text, className, ...rest}: Props & Props & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button type="submit" className={`btn capitalize w-24 bg-success hover:bg-green-500 text-white ${className}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
