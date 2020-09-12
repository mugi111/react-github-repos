import * as React from "react";

interface Props {
  name: string;
  url: string;
}

const ReposName = (props: Props) => {
  return (
    <div>
      <a href={props.url}>
        <span>{props.name}</span>
      </a>
    </div>
  );
};

export default ReposName;
