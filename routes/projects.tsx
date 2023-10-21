import { assert } from "$std/_util/asserts.ts";
import { getHelpWantedIssues } from "../lib/github.ts";
import Card from "../islands/Card.tsx";

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

  return (
    <>
      <h1 class="text-4xl font-bold mb-4 px-10">Contribute to devICT</h1>
      <div class="grid grid-cols-3 gap-4 px-10 w-full">
        <div class="col-span-2">
          <Card title="Current Issues">
            <ul class="list-none">
              {issues.map((issue) => {
                const [orgName, repoName] = issue.repository_url.split("/").slice(-2);
                const repoPath = `${orgName}/${repoName}`;
                const repoUrl = `https://github.com/${repoPath}`;
                return (
                  <li class="my-1">
                    <span class="font-bold">
                      <a href={repoUrl}>{repoPath}</a>:{" "}
                    </span>
                    <span>
                      <a href={issue.html_url}>{issue.title}</a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
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
