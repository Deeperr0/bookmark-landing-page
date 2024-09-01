import InvertableButton from "../InvertableButton";

export default function Hero() {
	return (
		<div className="w-full relative">
			<div className="flex flex-col-reverse lg:flex-row lg:pl-40 md:pl-20 items-center justify-between gap-16">
				<div className="flex flex-col gap-8 lg:w-[60%] items-center lg:items-start lg:text-left md:pr-20">
					<h1 className="text-4xl text-veryDarkBlue font-medium text-center lg:text-left">
						A Simple Bookmark Manager
					</h1>
					<p className="text-grayishBlue w-9/12 lg:w-full text-center lg:text-left">
						A clean and simple interface to organize your favourite websites.
						Open a new browser tab and see your sites load instantly. Try it for
						free.
					</p>
					<div className="flex gap-4 flex-col md:flex-row">
						{/* <button className="bg-primarySoftBlue text-white px-5 py-3 rounded-md border-2 border-transparent transition-all duration-300 hover:border-primarySoftBlue hover:bg-white hover:text-primarySoftBlue">
							Get it on Chrome
						</button>
						<button className="bg-grayishBlue text-white px-5 py-3 rounded-md border-2 border-transparent transition-all duration-300 hover:border-black hover:bg-white hover:text-black">
							Get it on Firefox
						</button> */}
						<InvertableButton
							paddingX={"px-5"}
							paddingY={"py-3"}
							backgroundColor={"primarySoftBlue"}
							color={"white"}
						>
							Get it on Chrome
						</InvertableButton>
						<button className="bg-lightGray text-black shadow-md px-5 py-3 rounded-md border-2 border-transparent transition-all duration-300 hover:border-black hover:bg-white hover:text-black">
							Get it on Firefox
						</button>
					</div>
				</div>
				<div className="flex relative w-full justify-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="657"
						height="466"
						className="w-full z-10 lg:ml-12 2xl:ml-[28%]"
					>
						<defs>
							<filter
								id="a"
								width="118%"
								height="126.9%"
								x="-9%"
								y="-5.7%"
								filterUnits="objectBoundingBox"
							>
								<feOffset
									dy="2"
									in="SourceAlpha"
									result="shadowOffsetOuter1"
								/>
								<feGaussianBlur
									in="shadowOffsetOuter1"
									result="shadowBlurOuter1"
									stdDeviation="2"
								/>
								<feColorMatrix
									in="shadowBlurOuter1"
									result="shadowMatrixOuter1"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
								/>
								<feMerge>
									<feMergeNode in="shadowMatrixOuter1" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
							<rect
								id="c"
								width="578"
								height="385"
								rx="26"
							/>
							<filter
								id="b"
								width="126%"
								height="139%"
								x="-13%"
								y="-11.7%"
								filterUnits="objectBoundingBox"
							>
								<feOffset
									dy="30"
									in="SourceAlpha"
									result="shadowOffsetOuter1"
								/>
								<feGaussianBlur
									in="shadowOffsetOuter1"
									result="shadowBlurOuter1"
									stdDeviation="20"
								/>
								<feColorMatrix
									in="shadowBlurOuter1"
									values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"
								/>
							</filter>
							<linearGradient
								id="d"
								x1="99.013%"
								x2="2.544%"
								y1="71.675%"
								y2="29.014%"
							>
								<stop
									offset="0%"
									stopColor="#151515"
								/>
								<stop
									offset="100%"
									stopColor="#3D3D3D"
								/>
							</linearGradient>
							<rect
								id="e"
								width="536"
								height="346"
								y="3"
								rx="8"
							/>
						</defs>
						<g
							fill="none"
							fillRule="evenodd"
							filter="url(#a)"
							transform="translate(39 9)"
						>
							<g transform="translate(.5 .5)">
								<g fillRule="nonzero">
									<use
										fill="#000"
										filter="url(#b)"
										xlinkHref="#c"
									/>
									<use
										fill="#777"
										xlinkHref="#c"
									/>
								</g>
								<rect
									width="574.23"
									height="381.865"
									x="2"
									y="2"
									fill="url(#d)"
									fillRule="nonzero"
									rx="25"
								/>
								<g transform="translate(21.03 16.303)">
									<rect
										width="471.463"
										height="353.756"
										x="33"
										fill="#2A2A2A"
										fillRule="nonzero"
										opacity=".1"
										rx="5"
									/>
									<mask
										id="f"
										fill="#fff"
									>
										<use xlinkHref="#e" />
									</mask>
									<use
										fill="#E8EAF6"
										fillRule="nonzero"
										xlinkHref="#e"
									/>
									<g mask="url(#f)">
										<path
											fill="#5267DF"
											d="M-3.53 3.197h547v59h-547z"
										/>
										<g
											transform="translate(22.47 17.197)"
											fill="#FFF"
										>
											<circle
												cx="16"
												cy="16"
												r="16"
												opacity=".245"
											/>
											<circle
												cx="477"
												cy="16"
												r="16"
												opacity=".104"
											/>
											<g transform="translate(47 6)">
												<rect
													width="120"
													height="6"
													opacity=".75"
													rx="3"
												/>
												<rect
													width="64"
													height="6"
													y="14"
													opacity=".25"
													rx="3"
												/>
											</g>
										</g>
									</g>
									<g mask="url(#f)">
										<g transform="translate(57 96)">
											<rect
												width="261"
												height="316"
												fill="#FFF"
												rx="8"
											/>
											<rect
												width="128"
												height="316"
												x="295"
												fill="#FFF"
												rx="8"
											/>
											<rect
												width="120"
												height="6"
												x="78.47"
												y="38.197"
												fill="#242A45"
												opacity=".5"
												rx="3"
											/>
										</g>
									</g>
								</g>
							</g>
							<g transform="translate(110 135)">
								<circle
									cx="16"
									cy="26"
									r="16"
									fill="#F98E5D"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="20"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="40"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="60"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="94"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="114"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="88"
									height="6"
									x="284"
									y="134"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
								<rect
									width="64"
									height="6"
									x="47"
									y="30"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
							</g>
							<g transform="translate(110 201)">
								<circle
									cx="16"
									cy="16"
									r="16"
									fill="#6AC6D6"
								/>
								<rect
									width="120"
									height="6"
									x="47"
									y="6"
									fill="#242A45"
									opacity=".5"
									rx="3"
								/>
								<rect
									width="64"
									height="6"
									x="47"
									y="20"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
							</g>
							<g transform="translate(110 257)">
								<circle
									cx="16"
									cy="16"
									r="16"
									fill="#A47ED4"
								/>
								<rect
									width="120"
									height="6"
									x="47"
									y="6"
									fill="#242A45"
									opacity=".5"
									rx="3"
								/>
								<rect
									width="64"
									height="6"
									x="47"
									y="20"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
							</g>
							<g transform="translate(110 313)">
								<circle
									cx="16"
									cy="16"
									r="16"
									fill="#EC7878"
								/>
								<rect
									width="120"
									height="6"
									x="47"
									y="6"
									fill="#242A45"
									opacity=".5"
									rx="3"
								/>
								<rect
									width="64"
									height="6"
									x="47"
									y="20"
									fill="#242A45"
									opacity=".25"
									rx="3"
								/>
							</g>
						</g>
					</svg>
					<div className="bg-primarySoftBlue h-[350px] w-9/12 md:w-5/12 absolute rounded-l-full bottom-0 z-0 right-0"></div>
				</div>
			</div>
		</div>
	);
}
