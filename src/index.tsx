import React from "react";
import { Octokit } from "@octokit/rest";
import { ReposName } from "./Components/";
import { ReposProps } from "./Types";

const getReposData = () => {
  let repoName;
  let description;
  let language;
  let star;
  let forked;

  const octokit = new Octokit();
  octokit.repos
    .get({
      owner: "octokit",
      repo: "node-github",
    })
    .then(({ data }) => {
      repoName = data.name;
      description = data.description;
      language = data.language;
      star = data.stargazers_count;
      forked = data.forks_count;
    });
};

const GithubRepos: React.FC<ReposProps> = (props: ReposProps) => {
  return (
    <div>
      <div>
        <ReposName></ReposName>
      </div>
    </div>
  );
};
export default GithubRepos;
