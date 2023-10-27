import { assert } from "$std/_util/asserts.ts";
import { getHelpWantedIssues } from "../lib/github.ts";
import Card from '../components/Card.tsx';
import IssuesList from '../islands/IssuesList.tsx';

const DEVICT_REPOS: string[] = [
  "devict/job-board",
  "devict/devict.org",
  "devict/keeper",
  "devict/hacktoberfest",
  "devict/help",
];

export default async function Home() {
  const ghToken = Deno.env.get("GITHUB_TOKEN");
  assert(ghToken);

  const issues = await getHelpWantedIssues({
    token: ghToken,
    repos: DEVICT_REPOS,
  });

  const issuesListProps = {
    repos: DEVICT_REPOS,
    issues
  };

  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-4">Contribute to devICT</h1>
      <div className="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <IssuesList {...issuesListProps} />
        </div>
        <Card title="Repositories" />
      </div>
    </div>
  );
}
