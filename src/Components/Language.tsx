import React, { useEffect, useState } from "react";
import { LangProps } from "../Types";
import { Octokit } from "@octokit/rest";

const Language: React.FC<LangProps> = (props: LangProps) => {
  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit();
      const result = await octokit.repos.get({
        owner: "github",
        repo: "linguist",
        path: "lib/linguist/languages.yml",
      });
    };
    fetchData();
  }, []);
  return (
    <span>
      <span>{props.name}</span>
    </span>
  );
};

export default Language;
