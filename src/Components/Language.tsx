import React from "react";
import { LangProps } from "../Types";
import "../Styles/Language.scss";

const GetLangColor = (langName: string | undefined) => {
  const colorList = require("../Styles/colors.json");
  if (langName !== undefined && langName) {
    return colorList[langName].color;
  } else {
    return null;
  }
};

const Language: React.FC<LangProps> = (props: LangProps) => {
  const langColor = GetLangColor(props.name);
  if (!langColor) {
    return <></>;
  } else {
    return (
      <span className="github-repos-language-span">
        <span
          className="github-repos-langage-color"
          style={{ backgroundColor: langColor }}
        />
        <span>{props.name}</span>
      </span>
    );
  }
};

export default Language;
