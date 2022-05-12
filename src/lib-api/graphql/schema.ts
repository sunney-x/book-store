import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/book.resolver";

const schema = await buildSchema({
	resolvers: [BookResolver],
});

export default schema;
