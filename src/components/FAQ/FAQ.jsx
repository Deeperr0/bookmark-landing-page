export default function FAQ() {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col w-[542px] gap-9">
				<h2 className="text-2xl font-medium text-center">
					Frequently Asked Questions
				</h2>
				<p className="text-center text-grayishBlue leading-normal">
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<div className="flex flex-col [&_p]:hidden [&_h3]:py-4 [&_div]:border-b [&_div]:border-grayishBlue border-t border-grayishBlue">
					<div>
						<div className="flex justify-between items-center">
							<h3>What is Bookmark?</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="12"
							>
								<path
									fill="none"
									stroke="#5267DF"
									strokeWidth="3"
									d="M1 1l8 8 8-8"
								/>
							</svg>
						</div>
						<p className="hidden">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
							quis quam ornare mattis.
						</p>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h3>How can I request a new browser?</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="12"
							>
								<path
									fill="none"
									stroke="#5267DF"
									strokeWidth="3"
									d="M1 1l8 8 8-8"
								/>
							</svg>
						</div>
						<p>
							Vivamus luctus eros aliquet convallis ultricies. Mauris augue
							massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
							eros aliquet convallis ultricies. Mauris augue massa, ultricies
							non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
							convallis ultricies. Mauris augue massa, ultricies non ligula.
							Suspendisse imperdiet.
						</p>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h3>Is there a mobile app?</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="12"
							>
								<path
									fill="none"
									stroke="#5267DF"
									strokeWidth="3"
									d="M1 1l8 8 8-8"
								/>
							</svg>
						</div>
						<p>
							Sed consectetur quam id neque fermentum accumsan. Praesent luctus
							vestibulum dolor, ut condimentum urna vulputate eget. Cras in
							ligula quis est pharetra mattis sit amet pharetra purus. Sed
							sollicitudin ex et ultricies bibendum.
						</p>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h3>What about other Chromium browsers?</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="12"
							>
								<path
									fill="none"
									stroke="#5267DF"
									strokeWidth="3"
									d="M1 1l8 8 8-8"
								/>
							</svg>
						</div>
						<p>
							Integer condimentum ipsum id imperdiet finibus. Vivamus in
							placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
							pellentesque non ut velit.
						</p>
					</div>
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
