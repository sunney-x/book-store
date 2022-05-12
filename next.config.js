/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["apiv1.biblusi.ge"],
	},
	reactStrictMode: true,
	webpack: (config) => {
		config.experiments = { topLevelAwait: true, layers: true };
		return config;
	},
	async headers() {
		return [
			{
				source: "/api/graphql",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "https://studio.apollographql.com",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type",
					},
					{
						key: "Access-Control-Allow-Credentials",
						value: "true",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
