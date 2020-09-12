export type ReposProps = {
  owner: string;
  repo: string;
};

export type ReposNameProps = {
  name: string;
  url: string;
};

export type DescProps = {
  body: string;
};

export type Root = {
  reposName: ReposNameProps;
  description: DescProps;
};
