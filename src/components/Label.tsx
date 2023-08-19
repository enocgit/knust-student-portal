import React, { LabelHTMLAttributes } from "react";

type Props = {
    text: string;
    htmlFor: string;
    className?: string;
};

const Label: React.FC<Props & LabelHTMLAttributes<HTMLLabelElement>> = ({text, htmlFor, className, ...rest}: Props & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
      {...rest}
    >
      {text}
    </label>
  );
};

export default Label;
