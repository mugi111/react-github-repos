import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description, Language } from "./Components";
import { ReposProps, Root } from "./Types";

const GithubRepos: React.FC<ReposProps> = (props: ReposProps) => {
  const [data, setData] = useState<Root>({
    reposName: { name: "octokit", url: "rest.js" },
    description: { body: "example" },
    language: { name: "typescript" },
  });

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit();
      const result = await octokit.repos.get({
        owner: props.owner,
        repo: props.repo,
      });

      setData({
        reposName: { name: result.data.name, url: result.data.url },
        description: { body: result.data.description },
        language: { name: result.data.language },
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ReposName
          name={data.reposName.name}
          url={data.reposName.url}
        ></ReposName>
        <Description body={data.description.body}></Description>
        <Language name={data.language.name}></Language>
      </div>
    </div>
  );
};
export default GithubRepos;
