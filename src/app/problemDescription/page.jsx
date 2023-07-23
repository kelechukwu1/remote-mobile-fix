"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoImageOutline } from "react-icons/io5";

const page = () => {
	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push("/thanks");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="p-6 justify-center items-center text-xl">
					<div>
						<label>Briefly describe what you need in detail</label>

						<textarea
							onChange={(e) => setService(e.target.value)}
							placeholder="Enter your text..."
							className="p-2 h-28 w-full md:text-2xl rounded-lg border border-gray-500 text-xl"
						></textarea>
					</div>
					<div className="text-xl border p-5 bg-gray-50 rounded-lg mt-5">
						<div className="mb-5">Additional files (optional)</div>
						<div className="h-40 w-full justify-center items-center cursor-pointer flex bg-gray-50 border">
							<div className=" justify-center items-center">
								<IoImageOutline className="w-20 h-20" />
							</div>
						</div>
						<div
							className="text-sm
           mt-4"
						>
							<label>
								Upload additional files that may help professionals better
								understand your need.
							</label>
						</div>
						<div className="bg-slate-800 hover:bg-slate-950 text-white text-xl cursor-pointer p-2 rounded transition duration-500 flex justify-center mt-5">
							<button>Continue</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default page;
