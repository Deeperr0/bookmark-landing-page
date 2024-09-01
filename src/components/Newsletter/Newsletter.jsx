import InvertableButton from "../InvertableButton";

export default function Newsletter() {
	return (
		<div className="flex flex-col items-center min-h-96 pb-10 lg:pb-0 md:h-80 bg-primarySoftBlue justify-center gap-10 px-10 lg:w-full">
			<h2 className="text-white text-sm">35,000+ already joined</h2>
			<p className="text-white text-3xl font-medium">
				Stay up-to-date with what we're doing
			</p>
			<form className="flex gap-4 h-12 flex-col md:flex-row">
				<input
					type="email"
					placeholder="Enter your email address"
					className="px-5 rounded-md w-72 h-12 shrink-0"
					required
				/>
				{/* <button className="bg-primarySoftRed px-6 text-white border-2 border-transparent rounded-md hover:bg-white hover:border-primarySoftRed hover:text-primarySoftRed">
					Contact us
				</button> */}
				<InvertableButton
					backgroundColor={"primarySoftRed"}
					color={"white"}
					paddingX={"px-6"}
					paddingY={"py-2"}
				>
					Contact us
				</InvertableButton>
			</form>
		</div>
	);
}
