import { KV } from "./datastore.ts";

export const Users = {
  getOrCreateUserId(request: Request): string {
    const cookies = request.headers.get("cookie");
    const userIdCookie = cookies?.split(";").find((c) =>
      c.trim().startsWith("userId=")
    );
    let userId = userIdCookie?.split("=")[1];

    if (!userId) {
      userId = crypto.randomUUID();
    }

    return userId;
  },

  async hasVoted(userId: string, topicName: string): Promise<boolean> {
    const key = ["votes", userId, topicName];
    const result = await KV.get(key);
    return result.value === true;
  },

  async recordVote(userId: string, topicName: string): Promise<void> {
    const key = ["votes", userId, topicName];
    await KV.set(key, true);
  },
};
