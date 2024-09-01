import { useState } from "react";
import FeatureCard from "../FeatureCard";

export default function Features() {
	const [currentFeature, setCurrentFeature] = useState(0);
	const featuresList = [
		{
			featureName: "Simple Bookmarking",
			featureTitle: "Bookmark in one click",
			featureDetails:
				"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
			featureImage: "./illustration-features-tab-1.svg",
		},
		{
			featureName: "Speedy Searching",
			featureTitle: "Intelligent search",
			featureDetails:
				"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
			featureImage: "./illustration-features-tab-2.svg",
		},
		{
			featureName: "Easy Sharing",
			featureTitle: "Share your bookmarks",
			featureDetails:
				"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
			featureImage: "./illustration-features-tab-3.svg",
		},
	];
	return (
		<div className="flex flex-col items-center relative pb-20">
			<div className="flex flex-col items-center lg:w-[43%] px-5">
				<h2 className="text-2xl font-medium">Features</h2>
				<p className="text-center text-grayishBlue leading-normal mt-5">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
			</div>
			<ul className="flex flex-col mt-5 md:flex-row border-t-2 md:border-t-0 md:[&_p]:mx-0 md:[&_p]:px-10 [&_p]:mx-10 [&_p]:py-7 border-b border-lightGray mb-20 [&>li]:transition-all [&>li]:duration-300 hover:cursor-pointer hover:[&>li]:text-primarySoftRed">
				<li
					className="flex border-b-2 lg:border-b-4 border-lightGray justify-center"
					onClick={() => setCurrentFeature(0)}
				>
					<p
						className={`w-fit md:w-full h-full ${
							currentFeature == 0
								? "border-b-4 border-primarySoftRed"
								: "border-b-2 lg:border-b-4 border-transparent md:border-transparent"
						}`}
					>
						Simple Bookmarking
					</p>
				</li>
				<li
					className="flex border-b-2 lg:border-b-4 border-lightGray justify-center"
					onClick={() => setCurrentFeature(1)}
				>
					<p
						className={`w-fit md:w-full h-full ${
							currentFeature == 1
								? "border-b-4 border-primarySoftRed"
								: "border-b-2 lg:border-b-4 border-transparent md:border-transparent"
						}`}
					>
						Speedy Searching
					</p>
				</li>
				<li
					className="flex border-b-2 lg:border-b-4 border-lightGray justify-center"
					onClick={() => setCurrentFeature(2)}
				>
					<p
						className={`w-fit md:w-full h-full ${
							currentFeature == 2
								? "border-b-4 border-primarySoftRed"
								: "border-b-2 lg:border-b-4 border-transparent md:border-transparent"
						}`}
					>
						Easy Sharing
					</p>
				</li>
			</ul>
			<div
				className={`flex justify-start w-[300%] overflow-hidden transition-all duration-300 relative z-10 ${
					currentFeature == 0
						? "transform translate-x-[33.3%]"
						: currentFeature == 1
						? "transform translate-x-[0]"
						: "transform -translate-x-[33.3%]"
				}`}
			>
				<FeatureCard
					key={featuresList[0].featureName}
					featureName={featuresList[0].featureName}
					featureTitle={featuresList[0].featureTitle}
					featureDetails={featuresList[0].featureDetails}
					featureImage={featuresList[0].featureImage}
				/>
				<FeatureCard
					key={featuresList[1].featureName}
					featureName={featuresList[1].featureName}
					featureTitle={featuresList[1].featureTitle}
					featureDetails={featuresList[1].featureDetails}
					featureImage={featuresList[1].featureImage}
				/>
				<FeatureCard
					key={featuresList[2].featureName}
					featureName={featuresList[2].featureName}
					featureTitle={featuresList[2].featureTitle}
					featureDetails={featuresList[2].featureDetails}
					featureImage={featuresList[2].featureImage}
				/>
			</div>
			{/* <div className="bg-primarySoftBlue h-[350px] w-4/12 absolute rounded-r-full bottom-0 z-0 left-0"></div> */}
		</div>
	);
}
