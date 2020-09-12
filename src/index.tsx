import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { ReposName, Description } from "./Components";
import { ReposProps, Root } from "./Types";

const GithubRepos: React.FC<ReposProps> = (props: ReposProps) => {
  const [data, setData] = useState<Root>({
    reposName: { name: "octokit", url: "rest.js" },
    description: { body: "example" },
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
      </div>
    </div>
  );
};
export default GithubRepos;
