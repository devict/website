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

const COMMUNITY_REPOS: string[] = [
  "benblankley/fort-rpg",
  "blunket/camelot",
  "imacrayon/alpine-ajax",
  "imacrayon/snowbodyknows",
  "imacrayon/whatthetofu",
  "kentonh/ProjectNameGenerator",
  "sethetter/linktrap",
  "sethetter/reqq"
];

export default async function Home() {
  const ALL_REPOS = DEVICT_REPOS.concat(COMMUNITY_REPOS);
  const ghToken = Deno.env.get("GITHUB_TOKEN");
  assert(ghToken);

  const issues = await getHelpWantedIssues({
    token: ghToken,
    repos: ALL_REPOS,
  });

  const issuesListProps = {
    repos: ALL_REPOS,
    issues
  };

  const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-4">Contribute to devICT</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <IssuesList {...issuesListProps} />
        </div>
        <div>
          <div class="mb-4">
            <Card title="DevICT Repos">
              <ul class="style-none">
                {DEVICT_REPOS.map(repo => {
                  const repoName = repo.split("/").slice(-1);
                  const repoUrl = `https://github.com/${repo}`;
                  return <li class="hover:underline"><a href={repoUrl} target="_blank">{repoName}</a></li>;
                })}
              </ul>
            </Card>
          </div>
          <Card title="ICT Communty Repos" >
            <ul class="style-none">
              {shuffle(COMMUNITY_REPOS).map(repo => {
                const repoName = repo.split("/").slice(-1);
                const repoUrl = `https://github.com/${repo}`;
                return <li class="hover:underline"><a href={repoUrl} target="_blank">{repoName}</a></li>;
              })}
            </ul>
            <a href="https://github.com/devict/help/pulls" target="_blank"><p class="font-bold mt-4 text-sm text-orange-800">Open a pull request to add your repo!</p></a>
          </Card>
        </div>
      </div>
    </div>
  );
}
