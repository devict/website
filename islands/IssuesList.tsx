import { GitHubIssue, issueRepoPath } from "../lib/github.ts";
import Card from "../components/Card.tsx";
import { useMemo, useState } from "preact/hooks";

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

type LabelProps = {
  name: string;
  color: string;
};

const IssuesList = ({ repos, issues }: Props) => {
  const NO_FILTER = "none";
  const [repoFilter, setRepoFilter] = useState<string>(NO_FILTER);
  const [labelFilter, setLabelFilter] = useState<LabelProps | undefined>();

  const clearFilters = () => {
    setRepoFilter(NO_FILTER);
    setLabelFilter(undefined);
  };

  const showLabel = (label: LabelProps) => {
    return (
      <span
        onClick={() => setLabelFilter(label)}
        style={{
          backgroundColor: `#${label.color}`,
          color: parseInt(label.color, 16) > 0xffffff / 2 ? "#000" : "#fff",
        }}
        class="cursor-pointer font-semibold mr-1 px-2 py-[0.125rem] rounded-full text-[10px] whitespace-nowrap hover:opacity-80 transition-opacity"
      >
        {label.name}
      </span>
    );
  };

  const filteredIssues = useMemo(() =>
    issues.filter((issue) => {
      const repoPath = issueRepoPath(issue);

      const isFilteredByRepo = repoFilter !== NO_FILTER &&
        repoPath !== repoFilter;
      const isFilteredByLabel = labelFilter &&
        !issue.labels.some((label) => label.name == labelFilter.name);

      return !(isFilteredByRepo || isFilteredByLabel);
    }), [issues, repoFilter, labelFilter]);

  const groupedIssues = useMemo(() => {
    const groups: Record<string, GitHubIssue[]> = {};
    filteredIssues.forEach((issue) => {
      const repoPath = issueRepoPath(issue);
      if (!groups[repoPath]) {
        groups[repoPath] = [];
      }
      groups[repoPath].push(issue);
    });
    return groups;
  }, [filteredIssues]);

  return (
    <Card title="Current Issues">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center my-4">
        <div class="flex flex-col sm:flex-row items-start sm:items-center mb-2 sm:mb-0">
          <select
            class="w-full sm:w-auto px-3 py-2 mb-2 sm:mb-0 sm:mr-4 border border-gray-300 rounded-md bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={repoFilter}
            onChange={(e) => setRepoFilter(e.currentTarget.value)}
          >
            <option value={NO_FILTER}>Filter by Repo</option>
            {repos.map((repo) => <option value={repo}>{repo}</option>)}
          </select>
          <span class="text-sm text-gray-600">
            {labelFilter
              ? <>Labeled with: {showLabel({ ...labelFilter })}</>
              : "Click a label to filter issues"}
          </span>
        </div>
        {(repoFilter !== NO_FILTER || labelFilter) && (
          <button
            type="button"
            onClick={clearFilters}
            class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition-colors"
          >
            Clear Filters
          </button>
        )}
      </div>
      <div class="space-y-6">
        {Object.entries(groupedIssues).map(([repoPath, repoIssues]) => (
          <div key={repoPath}>
            <h3 class="font-bold text-lg text-gray-800 mb-2">{repoPath}</h3>
            <ul class="list-none space-y-2">
              {repoIssues.map((issue) => (
                <li
                  key={issue.number}
                  class="flex items-center justify-between"
                >
                  <a
                    href={issue.html_url}
                    class="transition-colors flex-grow mr-2"
                  >
                    {issue.title}
                  </a>
                  <div class="flex flex-wrap justify-end">
                    {issue.labels.map((label) => showLabel(label))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IssuesList;
