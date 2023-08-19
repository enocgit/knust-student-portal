import React, { OptionHTMLAttributes } from "react";

type Props = {
  className?: string;
  text: string;
  value: string;
};

const Option: React.FC<Props & OptionHTMLAttributes<HTMLOptionElement>> = ({
  text,
  value,
  className,
  ...rest
}: Props & OptionHTMLAttributes<HTMLOptionElement>) => {
  return <option value={value} className={`${className}`} {...rest}>{text}</option>;
};

export default Option;
