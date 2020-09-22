import React from "react";
import { LangProps } from "../Types";
import "../Styles/Language.scss";

const Language: React.FC<LangProps> = (props: LangProps) => {
  return (
    <span className="github-repos-language-span">
      <span>{props.name}</span>
    </span>
  );
};

export default Language;
