export type ReposProps = {
  owner: string;
  repo: string;
};

export type ReposNameProps = {
  name: string;
  url: string;
};

export type Root = {
  reposName: ReposNameProps;
};
