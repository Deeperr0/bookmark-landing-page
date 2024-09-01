export default function InvertableButton({
	children,
	backgroundColor,
	color,
	paddingY,
	paddingX,
}) {
	return (
		<button
			className={`bg-${backgroundColor} text-${color} ${paddingY} ${paddingX} rounded-md border-2 border-transparent hover:border-${backgroundColor} hover:bg-${color} hover:text-${backgroundColor} shadow-md transition-all duration-200 ease-in`}
		>
			{children}
		</button>
	);
}
