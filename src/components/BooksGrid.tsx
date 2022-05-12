import type { IBook } from "@typings/common";
import { BookListing } from "./BookListing";
import Link from "next/link";

const BooksGrid = (props: {
	books: Pick<IBook, "id" | "name" | "price" | "image">[];
}) => {
	const { books } = props;

	return (
		<div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-9 p-9">
			{books.map((book) => (
				<Link href={`/book/${book.id}`} key={book.id} passHref>
					<BookListing key={book.id} book={book} />
				</Link>
			))}
		</div>
	);
};

export { BooksGrid };
