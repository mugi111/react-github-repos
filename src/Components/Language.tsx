import React from "react";
import { LangProps } from "../Types";
import "../Styles/Language.scss";

const colorList = require("../Styles/colors.json");


const Language: React.FC<LangProps> = (props: LangProps) => {
  if(props.name === undefined) {
    return (
      <span className="github-repos-language-span" style={{display: "none"}}>
        <span className="github-repos-langage-color" />
        <span>{props.name}</span>
      </span>
    );
  } else {
    return (
      <span className="github-repos-language-span">
        <span className="github-repos-langage-color" style={{backgroundColor: colorList[props.name].color}} />
        <span>{props.name}</span>
      </span> 
    )
  }

};

export default Language;
