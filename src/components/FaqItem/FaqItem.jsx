export default function FaqItem(props) {
	return (
		<div>
			<div
				className="relative flex justify-between items-center bg-white z-20 transition-all duration-300 hover:text-primarySoftRed hover:cursor-pointer"
				onClick={() => {
					if (props.currentAnswer == props.id) {
						props.setCurrentAnswer(-1);
					} else {
						props.setCurrentAnswer(props.id);
					}
				}}
			>
				<h3>{props.question}</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="12"
					className={`transition-all duration-600 ease-in ${
						props.currentAnswer == props.id ? "rotate-180" : "rotate-0"
					}`}
				>
					<path
						fill="none"
						stroke={
							props.currentAnswer == props.id ? "hsl(0, 94%, 66%)" : "#5267DF"
						}
						strokeWidth="3"
						d="M1 1l8 8 8-8"
					/>
				</svg>
			</div>
			<p
				className={`transition-all duration-400 ease-in z-0
								${
									props.currentAnswer == props.id
										? "relative top-0 translate-y-[0] opacity-100 h-full py-5"
										: `h-0 opacity-0 ease-in-out -translate-y-[100%]`
								} `}
			>
				{props.answer}
			</p>
		</div>
	);
}
