import { assert } from "$std/_util/asserts.ts";
import { getHelpWantedIssues } from "../lib/github.ts";
import RepoList from '../components/RepoList.tsx';
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

  return (
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-4">Contribute to devICT</h1>

      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <IssuesList {...issuesListProps} />
        </div>
        <div>
          <div class="mb-4">
            <RepoList title="DevICT Repos" list={DEVICT_REPOS} />
          </div>
          <RepoList title="ICT Communty Repos" list={COMMUNITY_REPOS} shuffleList={true} />
        </div>
      </div>
    </div>

  );
}
