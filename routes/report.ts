import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: () =>
    new Response(undefined, {
      status: 302,
      headers: { location: "/conduct#report-an-incident " },
    }),
};
