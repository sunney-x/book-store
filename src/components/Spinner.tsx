import { SpinnerRoundFilled } from "spinners-react";

const Spinner = () => {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<SpinnerRoundFilled size={"128px"} />
		</div>
	);
};

export { Spinner };
