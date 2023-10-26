import Card from "../components/Card.tsx";
import { useCallback, useState } from "preact/hooks";
import GitHubIssue from "../lib/github.ts";

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

const IssuesList = ({ repos, issues }: Props) => {
  const [filter, setFilter] = useState(null)
  const filterIssues = useCallback((issue) => setFilter(issue))


  const clearFilter = useCallback(() => setFilter(null))

  return (
    <Card title="Current Issues">
      <div className="flex items-center justify-between my-3">
        <select onChange={e => filterIssues(e.target.value)} value={filter} class="px-3 py-2">
          <option value={null}>Select a Repo to Filter</option>
          {repos.map(repo => {
            const [orgName, repoName] = repo.split("/").slice(-2);
            return <option value={repo}>{repoName}</option>
          })}
        </select>
        {filter && <button type="button" onClick={clearFilter} class="bg-stone-200 cursor-pointer px-3 py-1 rounded-lg text-right">Clear Filter</button>}
      </div>
      <ul class="list-none">
        {issues.map((issue) => {
          const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
          const repoPath = `${orgName}/${repoName}`;
          if (filter && filter != repoPath) return;

          return (
            <li class="my-1">
              <a href={issue.html_url}>
                <span class="font-bold">{repoPath}:</span>{" "}
                {issue.title}
              </a>
              <span>
                {issue.labels.map(label => <span style={"background-color: #".concat(label.color)} class="font-bold ml-2 px-2 py-1 rounded-xl text-black text-xs whitespace-nowrap">{label.name}</span>)}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default IssuesList;