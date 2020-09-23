export type RepoProps = {
  owner: string;
  repo: string;
};

export type ReposProps = {
  repoProps: RepoProps[];
};

export type ReposNameProps = {
  name?: string;
  url?: string;
};

export type DescProps = {
  body?: string;
};

export type LangProps = {
  name?: string;
};

export type LangObj = {
  langData: LangData;
  [key: string]: LangData;
}

export type LangData = {
  color: string;
  url: string;
  [key: string]: string;
}

export type StarProps = {
  count?: number;
  url?: string;
};

export type Root = {
  reposName?: ReposNameProps;
  description?: DescProps;
  language?: LangProps;
  stargazer?: StarProps;
};
