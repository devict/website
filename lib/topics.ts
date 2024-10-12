import { KV } from "./datastore.ts";

export interface Topic {
  name: string;
  votes: number;
}

export const Topics = {
  /// Save a new topic, idempotent because the key is derived from the topic name.
  ///
  /// @param topic The topic to save.
  /// @returns The saved topic.
  /// @throws If the topic could not be saved.
  async add(topic: Omit<Topic, "votes">): Promise<Topic> {
    const newTopic = { ...topic, votes: 0 };
    await KV.set(topicKey(newTopic), newTopic);
    return newTopic;
  },

  /// Get a list of all topics.
  ///
  /// @returns A list of all topics.
  /// @throws If the topics could not be listed.
  /// @example
  /// const topics = await Topics.list();
  /// console.log(topics);
  /// => [{ name: "Learn", votes: 0 }, { name: "Projects", votes: 0 }]
  async list(): Promise<Topic[]> {
    const keys = KV.list({ prefix: ["topics"] });

    const topics: Topic[] = [];
    for await (const { value } of keys) {
      topics.push(value as Topic);
    }

    return topics;
  },

  /// Increment the vote count for a topic
  ///
  /// @param topicName The name of the topic to upvote
  /// @returns The updated topic
  /// @throws If the topic could not be found or updated
  async upvote(topicName: string): Promise<Topic> {
    return await this.updateVotes(topicName, 1);
  },

  /// Helper method to update votes
  async updateVotes(topicName: string, increment: number): Promise<Topic> {
    const key = topicKey({ name: topicName, votes: 0 });
    const result = await KV.get(key);
    const topic = result?.value as Topic | null;

    if (!topic) {
      throw new Error(`Topic "${topicName}" not found`);
    }

    topic.votes += increment;
    await KV.set(key, topic);

    return topic;
  },
};

function topicKey(topic: Topic): string[] {
  const hashedName = btoa(topic.name.toLowerCase().replace(/[ -_.]/g, ""));
  return ["topics", hashedName];
}
