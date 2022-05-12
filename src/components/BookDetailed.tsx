import { IBook } from "@typings/common";
import Image from "next/image";

const BookDetailed = (props: { book: IBook }) => {
	const { book } = props;

	return (
		<div className="flex flex-col sm:flex-row mt-16 lg:m-16 sm:max-h-96 justify-evenly">
			<Image
				alt="book"
				className="rounded-xl"
				src={book.image}
				width={265}
				height={395}
			/>
			<div className="flex flex-col justify-between sm:mt-0 mt-2 sm:ml-3 p-9 rounded-xl bg-[#1a1b1e] sm:w-1/2">
				<div>
					<h1 className="font-bold text-xl text-left mb-4">{book.name}</h1>
					<div className="hidden lg:block">
						<p className="font-bold mb-2">აღწერა:</p>
						<h3 className="text-left overflow-y-scroll max-h-32">
							{book.description}
						</h3>
					</div>
				</div>
				<div>
					<p>ფასი: {book.price} GEL</p>
					<p>ავტორი: {book.author}</p>
					<p>ჟანრი: {book.genre}</p>
					<p>წელი: {book.year}</p>
				</div>
			</div>
		</div>
	);
};

export { BookDetailed };
