import * as React from "react";
import { ReposNameProps } from "../Types";

const ReposName: React.FC<ReposNameProps> = (props: ReposNameProps) => {
  return (
    <div>
      <a href={props.url}>
        <span>{props.name}</span>
      </a>
    </div>
  );
};

export default ReposName;
