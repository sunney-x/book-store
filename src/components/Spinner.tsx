import { SpinnerDotted } from "spinners-react";

const Spinner = () => {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<SpinnerDotted size={"128px"} />
		</div>
	);
};

export { Spinner };
