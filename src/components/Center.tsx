import type { PropsWithChildren } from "react";

const Center = <T,>(props: PropsWithChildren<T>) => (
	<div className="flex flex-col justify-center items-center">
		{props.children}
	</div>
);

export { Center };
