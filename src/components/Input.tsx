import React, { HTMLAttributes, InputHTMLAttributes } from "react";

type Props = {
  type: string;
  name: string;
  disabled?: boolean;
  className?: string;
  icon?: JSX.Element;
};

const Input: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  type,
  name,
  disabled,
  className,
  icon,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative">  
      <input
        type={type}
        id={name}
        name={name}
        disabled={disabled}
        className={`${disabled ? "bg-gray-100" : "bg-gray-50"} border border-gray-300 text-black text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-black/100 dark:placeholder-black/50 dark:text-white dark:focus:ring-success dark:focus:border-success ${className}`}
        {...rest}
      />
      {icon && (<div className="absolute translate-x-28 -translate-y-8">
        {icon}
      </div>)}
      
    </div>
  );
};

export default Input;
