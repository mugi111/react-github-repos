import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description, Language, Star } from "./Components";
import { ReposProps, Root } from "./Types";

const GithubRepos: React.FC<ReposProps> = (props: ReposProps) => {
  const [data, setData] = useState({
    reposName: { name: "repos", url: "repos" },
    description: { body: "repos" },
    language: { name: "go" },
    stargazer: {
      count: 200,
      url: "repos",
    },
  });

  useEffect(() => {
      const octokit = new Octokit();
      octokit.repos.get({
        owner: props.owner,
        repo: props.repo,
      }).then(result => {
        setData({
          reposName: { name: result.data.name, url: result.data.html_url },
          description: { body: result.data.description },
          language: { name: result.data.language },
          stargazer: {
            count: result.data.stargazers_count,
            url: result.data.stargazers_url,
          },
        });
      })
  }, []);

  return (
    <div>
      <div>
        <ReposName
          name={data.reposName!.name}
          url={data.reposName!.url}
        ></ReposName>
        <Description body={data.description!.body}></Description>
        <Language name={data.language!.name}></Language>
        <Star count={data.stargazer!.count} url={data.stargazer!.url}></Star>
      </div>
    </div>
  );
};

export default GithubRepos;
