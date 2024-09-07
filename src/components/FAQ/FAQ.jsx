import { useState } from "react";
import FaqItem from "../FaqItem";

export default function FAQ() {
	const [currentAnswer, setCurrentAnswer] = useState(-1);
	return (
		<div className="flex flex-col items-center mt-32">
			<div className="flex flex-col w-2/3 lg:w-[542px] gap-9">
				<h2 className="text-2xl font-medium text-center">
					Frequently Asked Questions
				</h2>
				<p className="text-center text-grayishBlue leading-normal">
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<div className="flex flex-col [&_h3]:py-4 [&_div]:border-b [&_div]:border-lightGray border-t border-lightGray">
					<FaqItem
						id={0}
						currentAnswer={currentAnswer}
						setCurrentAnswer={setCurrentAnswer}
						question="How can I use Bookmark?"
						answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
							quis quam ornare mattis."
					/>
					<FaqItem
						id={1}
						currentAnswer={currentAnswer}
						setCurrentAnswer={setCurrentAnswer}
						question="How can I request a new browser?"
						answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue
							massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
							eros aliquet convallis ultricies. Mauris augue massa, ultricies
							non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
							convallis ultricies. Mauris augue massa, ultricies non ligula.
							Suspendisse imperdiet."
					/>
					<FaqItem
						id={2}
						currentAnswer={currentAnswer}
						setCurrentAnswer={setCurrentAnswer}
						question="Is there a mobile app?"
						answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus
							vestibulum dolor, ut condimentum urna vulputate eget. Cras in
							ligula quis est pharetra mattis sit amet pharetra purus. Sed
							sollicitudin ex et ultricies bibendum."
					/>
					<FaqItem
						id={3}
						currentAnswer={currentAnswer}
						setCurrentAnswer={setCurrentAnswer}
						question="What about other Chromium browsers?"
						answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
						ligula, vitae porta dui. Curabitur aliquam, nisl eget
						imperdiet tristique."
					/>
				</div>
				<div className="flex justify-center">
					<button className="bg-primarySoftBlue w-28 text-white py-4 px-6 text-sm rounded-md">
						More Info
					</button>
				</div>
			</div>
		</div>
	);
}
