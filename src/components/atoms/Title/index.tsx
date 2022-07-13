import React from "react";
import { TitleProps } from "./types";

const Title = ({ children, className }: TitleProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default Title;
