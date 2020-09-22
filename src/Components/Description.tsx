import * as React from "react";
import { DescProps } from "../Types";
import "../Styles/Description.scss";

const Description: React.FC<DescProps> = (props: DescProps) => {
  return <p className="github-repos-desc">{props.body}</p>;
};

export default Description;
