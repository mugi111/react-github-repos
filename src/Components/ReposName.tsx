import * as React from "react";
import { ReposNameProps } from "../Types";
import "../Styles/ReposName.scss";

const ReposName: React.FC<ReposNameProps> = (props: ReposNameProps) => {
  return (
    <div>
      <a href={props.url} className="react-github-repos-text">
        <span>{props.name}</span>
      </a>
    </div>
  );
};

export default ReposName;
