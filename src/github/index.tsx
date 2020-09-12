import { Octokit } from "@octokit/rest";

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

  console.log(repoName, description, language, star, forked);
};
