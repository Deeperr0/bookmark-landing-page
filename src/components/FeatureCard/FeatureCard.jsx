export default function FeatureCard({
	featureName,
	featureTitle,
	featureImage,
	featureDetails,
}) {
	return (
		<div className="flex gap-32 relative z-10 w-1/3">
			<div className="w-1/2">
				<img
					src={featureImage}
					alt={featureName}
					className="w-full"
				/>
			</div>
			<div className="flex flex-col gap-10">
				<h3 className="text-2xl font-medium">{featureTitle}</h3>
				<p>{featureDetails}</p>
				<button className="bg-primarySoftBlue w-28 text-white py-4 px-6 text-sm rounded-md">
					More Info
				</button>
			</div>
		</div>
	);
}
