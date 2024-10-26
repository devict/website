# devICT: Help

This website aims to make it easy to find and act on different ways to be
involved with and contribute to the devICT community.

## Built with

- [Deno](https://deno.land/manual/getting_started/installation)
  - A typescript-first node alternative with a much better developer experience.
- [Fresh](https://fresh.deno.dev)
  - A server-first react framework (well, [preact](https://preactjs.com/)
    really).
  - Has tailwind built in (it's really
    [available now in version 1.6](https://fresh.deno.dev/docs/examples/migrating-to-tailwind)).
- Deployed to [Deno Deploy](https://deno.com/deploy).

## Developing locally

- Copy `.env.example` to `.env`.
  - Provide a value for config items, instructions below.
- Download dependencies: `deno cache dev.ts`.
- Run the server: `deno task start`.
- Open `http://localhost:8000`.

### Configuration

- `APP_GITHUB_TOKEN`, required for making GitHub API calls.
  - Generate one from your
    [GitHub settings](https://github.com/settings/tokens?type=beta).
  - Does not need any special permissions, it only accesses public information.

## Deployment

The site is deployed to [Deno Deploy](https://dash.deno.com). Commits to main are deployed by [this github workflow](https://github.com/devict/help/tree/main/.github/workflows/deploy.yml).

To update the `APP_GITHUB_TOKEN` in Deno Deploy, you must use the UI, as their CLI does not support updating project-level secrets (only providing per-deployment env vars via `deployctl deploy --env ...`).
