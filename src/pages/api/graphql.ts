import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { ApolloServer } from "apollo-server-micro";
import schema from "@lib-api/graphql/schema";

const apolloServer = new ApolloServer({
	schema,
});

const startServer = apolloServer.start();

const graphql = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://studio.apollographql.com"
	);

	await startServer;
	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
};

export const config: PageConfig = {
	api: {
		bodyParser: false,
	},
};

export default graphql;
