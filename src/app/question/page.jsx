"use client";

import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";

const page = () => {
	const router = useRouter();
	const handleRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push("/problemDescription");
	};

	return (
		<div className="bg-gray-100 h-screen lg:bg-gray-50 py-5 md:px-36 lg:px-80 justify-center items-center">
			<div
				className="mx-6 mb-5 w-14 py-2 rounded-md cursor-pointer bg-slate-900 hover:bg-slate-950 transition duration-500 text-white"
				onClick={() => router.push("/")}
			>
				<BsArrowLeft className="w-6 h-6 ml-4" />
			</div>
			<div className="mx-6 gap-4">
				<form onSubmit={handleSubmit}>
					<div className="text-xl">How would you like to be contacted?</div>
					<div className="justify-center flex mb-3">
						<select
							className="w-full p-3 rounded-lg text-xl"
							onChange={handleRef}
						>
							<option value="one">Through WhatsApp</option>
							<option value="one">Through email</option>
							<option value="one">Through phone call</option>
						</select>
					</div>
					{handleRef.current && (
						<div>
							<div>Enter your WhatsApp number</div>
							<input type="text" placeholder="+234.........." />
						</div>
					)}
					<div className="text-xl mb-3">
						<div>Enter your email</div>
						<input
							type="text"
							placeholder="test@test.com"
							className="w-full p-3 rounded-lg text-xl"
						/>
					</div>
					<div className="text-xl mb-3">
						<div>Enter your phone number</div>
						<input
							type="text"
							placeholder="+234.........."
							className="w-full p-3 rounded-lg text-xl"
						/>
					</div>
					<div className="flex justify-between mt-4">
						<div>
							<Link href={"/"}>
								<div className="bg-gray-300 hover:bg-gray-500 text-xl p-2 rounded transition duration-500">
									Go Back
								</div>
							</Link>
						</div>
						<div>
							<div className="bg-slate-800 hover:bg-slate-950 text-white text-xl p-2 rounded transition duration-500">
								<button>Continue</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
