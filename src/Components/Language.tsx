import React from "react";
import { LangProps } from "../Types";
import "../Styles/Language.scss";

const Language: React.FC<LangProps> = (props: LangProps) => {
  return (
    <p className="github-repos-language-p">
      <span className="github-repos-language-span">
        <span>{props.name}</span>
      </span>
    </p>
  );
};

export default Language;
