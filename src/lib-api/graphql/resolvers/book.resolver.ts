import { Arg, Field, ObjectType, Query, Resolver } from "type-graphql";
import Redis from "@lib-api/redis";
import "reflect-metadata";

@ObjectType()
export class Book {
	@Field()
	id: Number;

	@Field()
	name: String;

	@Field()
	author: String;

	@Field()
	price: Number;

	@Field()
	genre: String;

	@Field()
	image: String;

	@Field()
	description: String;

	@Field()
	year: Number;
}

@Resolver(Book)
export class BookResolver {
	@Query(() => [Book])
	async books(
		@Arg("limit", {
			nullable: true,
		})
		limit?: number
	): Promise<Book[]> {
		const redis = await Redis.client();

		// there's no redis command to get all keys with its values for hash map type
		// so, we have to iterate over all of the keys to get the according values
		let bookKeys = await redis.keys("book:*");

		bookKeys = bookKeys.slice(0, limit || bookKeys.length);

		const bookRetrievePromises = [];

		for (const bookKey of bookKeys) {
			bookRetrievePromises.push(redis.hGetAll(bookKey));
		}

		const bookRetrieveResults = await Promise.all(bookRetrievePromises);

		// typecast the results to book objects
		// because we know that the keys are book:*
		return bookRetrieveResults as any;
	}

	@Query(() => [Book])
	async booksByName(@Arg("name") name: string): Promise<Book[]> {
		const redis = await Redis.client();

		const res = await redis.ft.search("idx:book", name);

		return res.documents.map((v) => v.value) as any;
	}

	@Query(() => Book)
	async book(@Arg("id") id: number): Promise<Book> {
		const redis = await Redis.client();

		const book = await redis.hGetAll(`book:${id}`);

		return book as any;
	}
}
