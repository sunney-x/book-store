import type { IBook } from "@typings/common";
import Image from "next/image";

const BookListing = (props: {
	book: Pick<IBook, "name" | "price" | "image">;
	onClick?: () => void;
}) => {
	const { book } = props;

	return (
		<div
			className="flex flex-col rounded-xl hover:scale-105 max-w-fit cursor-pointer"
			onClick={props.onClick}
		>
			<Image
				alt="book"
				className="rounded-t-xl"
				src={book.image}
				width={200}
				height={250}
			/>
			<div className="px-4 py-2 w-0 min-w-full h-16 rounded-b-xl bg-[#1a1b1e]">
				<div className="font-bold text-left truncate">{book.name}</div>
				<p>{book.price} GEL</p>
			</div>
		</div>
	);
};

export { BookListing };
