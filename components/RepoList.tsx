import Card from "../components/Card.tsx";

type RepoListProps = {
  title: string;
  list: string[];
  shuffleList?: boolean;
};

const shuffle = (array: string[]) => {
  const shuffled: string[] = [];
  shuffled.concat(array);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [array[j], array[i]];
  }
  return shuffled;
};

const RepoList = ({ title, list, shuffleList = false }: RepoListProps) => {
  const repos = shuffleList ? shuffle(list) : list;

  return (
    <Card title={title}>
      <ul class="style-none">
        {repos.map((repo) => {
          const repoName = repo.split("/").slice(-1);
          const repoUrl = `https://github.com/${repo}`;
          return (
            <li class="hover:underline">
              <a href={repoUrl} target="_blank">
                {repoName}
              </a>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default RepoList;
