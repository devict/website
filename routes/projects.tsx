import { assert } from "$std/_util/asserts.ts";
import { getHelpWantedIssues } from "../lib/github.ts";
import Card from "../components/Card.tsx";
import IssuesList from "../islands/IssuesList.tsx";

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
    <>
      <h1 class="text-4xl font-bold mb-4 px-10">Contribute to devICT</h1>
      <div class="grid grid-cols-3 gap-4 px-10 w-full">
        <div class="col-span-2">
          <IssuesList {...issuesListProps} />
        </div>
        <div class="">
          <Card title="Repositories">
            <ul class="list-none">
              {DEVICT_REPOS.map((repo) => {
                const repoName = repo.substring(repo.indexOf('/')+1);
                const repoUrl = `https://github.com/${repo}`;

                return <li><a href={repoUrl}>{repoName}</a></li>;
              })}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
