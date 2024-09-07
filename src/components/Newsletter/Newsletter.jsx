import { useState } from "react";
import InvertableButton from "../InvertableButton";

export default function Newsletter() {
	const [invalidEmail, setInvalidEmail] = useState(false);
	function emailIsValid(email) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
	function handleSubmit(e) {
		e.preventDefault();
		if (!emailIsValid(e.target[0].value)) {
			setInvalidEmail(true);
			return;
		}
		setInvalidEmail(false);
		e.target.reset();
		alert("Thank you for subscribing!");
	}
	return (
		<section
			className="flex flex-col items-center min-h-96 pb-10 lg:pb-0 md:h-80 bg-primarySoftBlue justify-center gap-10 px-10 lg:w-full"
			role="region"
		>
			<h2 className="text-white tracking-[0.3em]">35,000+ already joined</h2>
			<p className="text-white text-3xl font-medium">
				Stay up-to-date with what we're doing
			</p>
			<form
				className="flex gap-4 h-12 flex-col md:flex-row"
				onSubmit={(e) => handleSubmit(e)}
				noValidate
			>
				<div
					className={`p-[2px] ${
						invalidEmail && "bg-primarySoftRed"
					} h-fit rounded-md`}
				>
					<div className="rounded-md h-12 shrink-0 bg-white outline-none w-72 flex items-center pr-3">
						<input
							type="email"
							placeholder="Enter your email address"
							className="pl-5 rounded-md w-11/12 h-12 shrink-0 bg-white outline-none"
						/>
						{invalidEmail && (
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
								>
									<g
										fill="none"
										fillRule="evenodd"
									>
										<circle
											cx="10"
											cy="10"
											r="10"
											fill="#FA5959"
										/>
										<g
											fill="#FFF"
											transform="translate(9 5)"
										>
											<rect
												width="2"
												height="7"
												rx="1"
											/>
											<rect
												width="2"
												height="2"
												y="8"
												rx="1"
											/>
										</g>
									</g>
								</svg>
							</div>
						)}
					</div>
					{invalidEmail && (
						<p className="text-white text-xs italic px-2 pt-1">
							Whoops, make sure it's an email
						</p>
					)}
				</div>
				{/* <button className="bg-primarySoftRed px-6 text-white border-2 border-transparent rounded-md hover:bg-white hover:border-primarySoftRed hover:text-primarySoftRed">
					Contact us
				</button> */}
				<InvertableButton
					backgroundColor={"primarySoftRed"}
					color={"white"}
					paddingX={"px-6"}
					paddingY={"py-2"}
				>
					Contact us
				</InvertableButton>
			</form>
		</section>
	);
}
