import { useDebouncedValue } from "@hooks/useDebouncedValue";
import { ChangeEvent, useMemo, useState } from "react";

const Search = (props: { onSearch: (search: string) => void }) => {
	const [search, setSearch] = useState("");
	const [debounced] = useDebouncedValue(search, 0);

	useMemo(() => {
		props.onSearch(debounced);
	}, [debounced, props]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value);

	return (
		<input
			className="p-4 rounded-xl text-black mt-4"
			type="text"
			value={search}
			onChange={handleChange}
		/>
	);
};

export { Search };
