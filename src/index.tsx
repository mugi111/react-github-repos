import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description, Language, Star } from "./Components";
import { ReposProps, Root } from "./Types";

const GithubRepos: React.FC<ReposProps> = (props: ReposProps) => {
  const [data, setData] = useState<Root>({});

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit();
      const result = await octokit.repos.get({
        owner: props.owner,
        repo: props.repo,
      });

      setData({
        reposName: { name: result.data.name, url: result.data.html_url },
        description: { body: result.data.description },
        language: { name: result.data.language },
        stargazer: {
          count: result.data.stargazers_count,
          url: result.data.stargazers_url,
        },
      });
    };
    fetchData();
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
