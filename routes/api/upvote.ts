import { Handlers } from "$fresh/server.ts";
import { Topics } from "../../lib/topics.ts";
import { Users } from "../../lib/users.ts";

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json();
    const { topic } = body;

    if (typeof topic !== "string" || topic.trim() === "") {
      return new Response(JSON.stringify({ error: "Invalid topic" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const userId = await Users.getOrCreateUserId(req);
      const hasVoted = await Users.hasVoted(userId, topic);

      if (hasVoted) {
        return new Response(JSON.stringify({ error: "Already voted" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const updatedTopic = await Topics.upvote(topic.trim());
      await Users.recordVote(userId, topic);

      const response = new Response(JSON.stringify(updatedTopic), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });

      // Set the userId cookie if it's a new user
      if (!req.headers.get("cookie")?.includes("userId=")) {
        response.headers.set(
          "Set-Cookie",
          `userId=${userId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`,
        );
      }

      return response;
    } catch (error) {
      console.error("Error upvoting topic:", error);
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
