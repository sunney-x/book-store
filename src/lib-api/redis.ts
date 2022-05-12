import type { RedisClientType } from "redis";
import { createClient } from "redis";

export default class Redis {
	private static _client?: RedisClientType;

	public static async client() {
		if (this._client?.isOpen) {
			return this._client;
		}

		if (!process.env.REDIS_URL) {
			throw new Error("REDIS_URL is not set");
		}

		this._client = createClient({
			url: process.env.REDIS_URL,
			password: process.env.REDIS_PASSWORD,
		});

		await this._client.connect();

		return this._client;
	}
}
