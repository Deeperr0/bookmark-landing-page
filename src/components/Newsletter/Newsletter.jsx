export default function Newsletter() {
	return (
		<div className="flex flex-col items-center h-80 bg-primarySoftBlue justify-center gap-10">
			<h2 className="text-white text-sm">35,000+ already joined</h2>
			<p className="text-white text-3xl font-medium">
				Stay up-to-date with what we're doing
			</p>
			<form className="flex gap-4 h-12">
				<input
					type="text"
					placeholder="Enter your email address"
					className="px-5 rounded-md w-72"
				/>
				<button className="bg-primarySoftRed px-6 text-white border-0 rounded-md">
					Contact us
				</button>
			</form>
		</div>
	);
}
