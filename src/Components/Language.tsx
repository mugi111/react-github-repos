import React from "react";
import { LangProps } from "../Types";
import colorList from "../Styles/colors.json";
import "../Styles/Language.scss";

const Language: React.FC<LangProps> = (props: LangProps) => {
  return (
    <span className="github-repos-language-span">
      <span className="github-repos-langage-color" style={{backgroundColor: "red"}} />
      <span>{props.name}</span>
    </span>
  );
};

export default Language;
