import Card from "../components/Card.tsx";
import { useCallback, useState } from "preact/hooks";
import GitHubIssue from "../lib/github.ts";

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

const IssuesList = ({ repos, issues }: Props) => {
  const [repoFilter, setRepoFilter] = useState(null);
  const [labelFilter, setLabelFilter] = useState({name: null, color: null});
  const filterByRepo = useCallback((repo) => setRepoFilter(repo));
  const filterByLabel = useCallback((label) => setLabelFilter(label));

  const clearFilters = useCallback(() => {
    setRepoFilter(null);
    setLabelFilter(null);
  });

  const showLabel = (label: { name: string, color: string }) => {
    return (<span onClick={() => filterByLabel(label)} style={"background-color: #".concat(label.color)} class="cursor-pointer font-bold ml-2 px-2 py-1 rounded-xl text-white text-xs whitespace-nowrap hover:text-black">{label.name}</span>);
  };

  return (
    <Card title="Current Issues">
      <div className="flex items-center justify-between my-3">
        <div>
          <select onChange={e => filterByRepo(e.target.value)} value={repoFilter} class="px-3 py-2">
            <option value={null}>Filter by Repo</option>
            {repos.map(repo => {
              const [orgName, repoName] = repo.split("/").slice(-2);
              return <option value={repo}>{repoName}</option>
            })}
          </select>
          {(labelFilter && labelFilter.name) ? (
            <>
              <span class="font-bold ml-4">Labeled with: </span>{showLabel(labelFilter)}
            </>
          ) : (
            <>
              <span class="font-bold ml-4">Click a label to filter</span>
            </>
          )}
        </div>
        {(repoFilter || (labelFilter && labelFilter.name)) && <button type="button" onClick={clearFilters} class="bg-stone-200 cursor-pointer px-3 py-1 rounded-lg text-right">Clear Filters</button>}
      </div>
      <ul class="list-none">
        {issues.map((issue) => {
          const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
          const repoPath = `${orgName}/${repoName}`;

          if (
            // If the repo filter is set and this issue is from a different repo, or
            (repoFilter && repoFilter != repoPath) ||
            // If the label filter is set and this issue does not contain the label to filter by...
            (labelFilter && labelFilter.name) && !issue.labels.some(label => label.name === labelFilter.name)
          ) return; // Don't render the issue.

          return (
            <li class="my-2">
              <a href={issue.html_url}>
                <span class="font-bold">{repoPath}:</span>{" "}
                {issue.title}
              </a>
              <span>
                {issue.labels.map(label => showLabel({...label}))}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default IssuesList;