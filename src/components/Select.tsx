import React, { SelectHTMLAttributes } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Select: React.FC<Props & SelectHTMLAttributes<HTMLSelectElement>> = ({
  id,
  children,
  disabled,
  className,
  ...rest
}: Props & SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      id={id}
      className={`${disabled ? "bg-gray-100" : "bg-gray-50"} border border-gray-300 text-black text-sm rounded-lg focus:ring-success focus:border-success block w-full p-2.5 dark:bg-gray-700 dark:border-black/100 dark:placeholder-black/50 dark:text-white dark:focus:ring-success dark:focus:border-success ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select;
