import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import { BooksGrid, Center, Search } from "@components";
import { useEffect, useState } from "react";
import { IBook } from "@typings/common";

const GET_BOOKS = gql`
	query {
		books(limit: 100) {
			id
			name
			price
			image
		}
	}
`;

const Home: NextPage = () => {
	const { loading, error, data } = useQuery<{ books: IBook[] }>(GET_BOOKS);
	const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
	const [searchKeyword, setSearchKeyword] = useState("");

	useEffect(() => {
		if (data) {
			setFilteredBooks(
				searchKeyword.length > 2
					? data.books.filter((book) =>
							book.name.toLowerCase().includes(searchKeyword.toLowerCase())
					  )
					: data.books
			);
		}

		return () => {
			setFilteredBooks([]);
		};
	}, [data, searchKeyword]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error {error.message}</p>;
	if (!data) return <p>No data</p>;

	return (
		<>
			<Center>
				<Search onSearch={setSearchKeyword} />
			</Center>
			<BooksGrid books={filteredBooks} />
		</>
	);
};

export default Home;
