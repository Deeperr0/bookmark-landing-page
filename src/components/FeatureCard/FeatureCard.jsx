export default function FeatureCard({
	featureName,
	featureTitle,
	featureImage,
	featureDetails,
}) {
	return (
		<div className="flex gap-32 relative z-10 w-full flex-col lg:flex-row items-center">
			<div className="h-1/2 lg:h-full relative px-[10%] lg:pl-[12.5%] lg:pr-0 lg:w-1/2 w-full">
				<img
					src={featureImage}
					alt={featureName}
					className="lg:h-full lg:object-contain relative z-10"
				/>
				<div className="bg-primarySoftBlue h-4/6 w-7/12 lg:w-7/12 absolute rounded-r-full bottom-0 z-0 left-0"></div>
			</div>
			<div className="flex flex-col gap-10 lg:w-2/5 text-center lg:text-left items-center lg:items-start px-[10%] lg:pl-0 lg:pr-[12.5%]">
				<h3 className="text-2xl font-medium">{featureTitle}</h3>
				<p className="text-grayishBlue">{featureDetails}</p>
				<button className="bg-primarySoftBlue w-28 text-white py-4 px-6 text-sm rounded-md">
					More Info
				</button>
			</div>
		</div>
	);
}
