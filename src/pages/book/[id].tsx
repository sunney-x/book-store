import { gql, useQuery } from "@apollo/client";
import { IBook } from "@typings/common";
import { useRouter } from "next/router";
import { BookDetailed, Center, HomeButton, Spinner } from "@components";

const GET_BOOK_BY_ID = gql`
	query ($id: Float!) {
		book(id: $id) {
			name
			description
			author
			price
			image
			genre
			year
		}
	}
`;

const Book = () => {
	const router = useRouter();
	const { id } = router.query;
	const { loading, error, data } = useQuery<{ book: IBook }>(GET_BOOK_BY_ID, {
		variables: {
			id: parseFloat(id as string),
		},
	});

	if (loading) return <Spinner />;
	if (error) return <p>Error {error.message}</p>;
	if (!data) return <p>No data</p>;

	return (
		<div className="m-16">
			<Center>
				<HomeButton />
			</Center>
			<Center>
				<BookDetailed book={data.book} />
			</Center>
		</div>
	);
};

export default Book;
