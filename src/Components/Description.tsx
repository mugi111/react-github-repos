import * as React from "react";
import { DescProps } from "../Types";

const Description: React.FC<DescProps> = (props: DescProps) => {
  return <p>{props.body}</p>;
};

export default Description;
