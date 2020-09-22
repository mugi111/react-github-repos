import * as React from "react";
import { StarProps } from "../Types";

const Star: React.FC<StarProps> = (props: StarProps) => {
  return (
    <a href={props.url} className="github-repos-star-a">
      {props.count}
    </a>
  );
};

export default Star;
