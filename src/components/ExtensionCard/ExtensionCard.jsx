export default function ExtensionCard({
	extensionLogo,
	extensionName,
	minimumVersion,
}) {
	return (
		<div className="flex flex-col items-center rounded-xl shadow-lg justify-center gap-5 py-6">
			<div className="h-24 w-24">{extensionLogo}</div>
			<h3>Add to {extensionName}</h3>
			<p>Minimum version {minimumVersion}</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="280"
				height="4"
			>
				<path
					fill="#495DCF"
					fillOpacity=".2"
					fillRule="evenodd"
					d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
				/>
			</svg>
			<button className="bg-primarySoftBlue px-9 py-4 text-white rounded-md">
				Add & Install Extension
			</button>
		</div>
	);
}
