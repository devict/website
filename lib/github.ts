import { z } from "zod";

export async function getHelpWantedIssues(
  { token, repos }: { token: string; repos: string[] },
) {
  /**
   * TODO: Assuming there won't be more than 100 help-wanted issues on
   * any of the defined repos. Handle pagination!
   */
  const PER_PAGE = 100;
  const allRepoIssues = await Promise.all(
    repos.map((repo) =>
      fetchIssues({ token, repo, perPage: PER_PAGE, page: 1 })
    ),
  );
  return allRepoIssues.flat();
}

const GitHubIssueSchema = z.object({
  title: z.string(),
  number: z.number(),
  html_url: z.string(),
  repository_url: z.string(),
  state: z.string(),
  labels: z.array(z.object({
    name: z.string(),
    color: z.string(),
  })),
  reactions: z.object({
    "+1": z.number(),
    "-1": z.number(),
    confused: z.number(),
    eyes: z.number(),
    heart: z.number(),
    hooray: z.number(),
    laugh: z.number(),
    rocket: z.number(),
    total_count: z.number(),
  }),
});
export type GitHubIssue = z.infer<typeof GitHubIssueSchema>;

const GitHubIssueResponseSchema = z.array(GitHubIssueSchema);

async function fetchIssues(args: {
  token: string;
  repo: string;
  labels?: string[];
  perPage?: number;
  page?: number;
}) {
  const defaults = { perPage: 100, page: 1, labels: ["devict-help-wanted"] };
  const { token, repo, labels, perPage, page } = { ...defaults, ...args };

  const url = `https://api.github.com/repos/${repo}/issues?state=open&labels=${
    labels.join(",")
  }&per_page=${perPage}&page=${page}`;
  const resp = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!resp.ok) {
    console.error(
      `Fetching issues failed (${resp.status} ${url}): ${await resp.text()}`,
    );
    throw new Error(`Failed to fetch ${url}: ${resp.statusText}`);
  }
  return GitHubIssueResponseSchema.parse(await resp.json());
}
