import { GitHubIssue } from '../lib/github.ts';
import Card from '../components/Card.tsx';
import { useState } from 'preact/hooks';

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

type LabelProps = {
  name: string;
  color: string;
}

const IssuesList = ({repos, issues}: Props) => {
  const NO_FILTER = "none";
  const [repoFilter, setRepoFilter] = useState<string>(NO_FILTER);
  const [labelFilter, setLabelFilter] = useState<LabelProps | undefined>();

  const clearFilters = () => {
    setRepoFilter(null);
    setLabelFilter({});
  }

  const showLabel = (label: LabelProps) => {
    return (
      <span onClick={() => setLabelFilter(label)} style={"background-color: #".concat(label.color)} class="cursor-pointer font-bold mr-1 px-2 py-[0.125rem] rounded-xl text-white text-xxs whitespace-nowrap hover:text-black">
        {label.name}
      </span>
    );
  };

  return (
    <Card title="Current Issues">
      <div class="flex justify-between my-4">
        <div>
          <select class="px-4 py-2" value={repoFilter} onChange={e => setRepoFilter(e.target.value)}>
            <option value={null}>Filter by Repo</option>
            {repos.map(repo => <option value={repo}>{repo}</option>)}
          </select>
          <span class="ml-4">
            {labelFilter.name ? (
              <>Labeled with: {showLabel({...labelFilter})}</>
            ) : (
              "Click a label to filter issues"
            )}
          </span>
        </div>
        {(repoFilter || labelFilter.name) && <button type="button" onClick={clearFilters} class="bg-zinc-200 px-4">Clear Filters</button>}
      </div>
      <ul class="list-none">
        {issues.map((issue) => {
          const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
          const repoPath = `${orgName}/${repoName}`;

          if (
            (repoFilter && repoPath !== repoFilter) ||
            (labelFilter.name && !issue.labels.some(label => label.name == labelFilter.name))
          ) return;

          const repoUrl = `https://github.com/${repoPath}`;
          return (
            <li class="my-3">
              <div class="underline hover:text-gray-600">
                <a href={issue.html_url} class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                  <span class="font-bold">{repoPath}:</span>{" "}
                  {issue.title}
                </a>
              </div>
              <div class="flex">
                {issue.labels.map(label => showLabel(label))}
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  )
};

export default IssuesList;
