import React from "react";
import { LangProps } from "../Types";

const Language: React.FC<LangProps> = (props: LangProps) => {
  return (
    <span>
      <span>{props.name}</span>
    </span>
  );
};

export default Language;
