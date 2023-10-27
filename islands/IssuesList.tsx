import { GitHubIssue } from '../lib/github.ts';
import Card from '../components/Card.tsx';

type Props = {
  repos: Array<string>;
  issues: Array<GitHubIssue>;
};

const IssuesList = ({repos, issues}: Props) => {
  return (
    <Card title="Current Issues">
      <ul class="list-none">
        {issues.map((issue) => {
          const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
          const repoPath = `${orgName}/${repoName}`;
          const repoUrl = `https://github.com/${repoPath}`;
          return (
            <li class="my-1">
              <span class="underline hover:text-gray-600">
                <a href={issue.html_url} class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                  <span class="font-bold">{repoPath}:</span>{" "}
                  {issue.title}
                </a>
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  )
};

export default IssuesList;
