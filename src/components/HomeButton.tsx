import Link from "next/link";

const HomeButton = () => (
	<Link href="/" passHref>
		<a className="px-4 py-2 text-xl rounded-xl bg-zinc-900">Home</a>
	</Link>
);

export { HomeButton };
